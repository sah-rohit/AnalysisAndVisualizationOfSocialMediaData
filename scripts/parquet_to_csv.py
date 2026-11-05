from pathlib import Path
import duckdb
INPUT_DIR = Path("data/raw/data")
OUTPUT_DIR = Path("data/processed/data")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
def convert_parquet_to_csv(input_file: Path):
    """Convert a Parquet file into CSV."""
    if not input_file.exists():
        print(f"[ERROR] File not found: {input_file}")
        return
    output_file = OUTPUT_DIR / f"{input_file.stem}.csv"
    if output_file.exists():
        print(f"[SKIP] CSV already exists: {output_file}")
        return
    print(f"[START] Converting: {input_file.name}")
    try:
        query = f"""
            COPY (
                SELECT *
                FROM read_parquet('{input_file.as_posix()}')
            )
            TO '{output_file.as_posix()}'
            (HEADER, DELIMITER ',');
        """
        duckdb.sql(query)
        print(f"[SUCCESS] Saved: {output_file}")
    except Exception as error:
        print(f"[ERROR] Conversion failed: {error}")
def main():
    parquet_files = list(INPUT_DIR.glob("*.parquet"))
    if not parquet_files:
        print("[INFO] No Parquet files found.")
        return
    print(f"Found {len(parquet_files)} Parquet file(s).\n")
    for file in parquet_files:
        convert_parquet_to_csv(file)
    print("\nConversion process completed.")
if __name__ == "__main__":
    main()