# add these dependencies via terminal: python -m pip install huggingface_hub
# run this in terminal for getting/loading data locally from Hugging Face: python -m src.loader


from pathlib import Path

import pyarrow.parquet as pq
from huggingface_hub import hf_hub_download

PROJECT_ROOT = Path(__file__).resolve().parent.parent
RAW_DIR = PROJECT_ROOT / "data" / "raw"

REPO_ID = "HuggingFaceGECLM/REDDIT_comments"
FILENAME = (
    "data/programming-00000-of-00007-682384b233d9a62b.parquet"
)


def download_dataset() -> Path:
    RAW_DIR.mkdir(parents=True, exist_ok=True)

    path = hf_hub_download(
        repo_id=REPO_ID,
        repo_type="dataset",
        filename=FILENAME,
        local_dir=RAW_DIR,
    )

    return Path(path)


def inspect_dataset(path: Path) -> None:
    parquet = pq.ParquetFile(path)

    print(f"File: {path.name}")
    print(f"Rows: {parquet.metadata.num_rows:,}")
    print(f"Row groups: {parquet.num_row_groups}")
    print("\nSchema:")
    print(parquet.schema)


if __name__ == "__main__":
    dataset_path = download_dataset()
    inspect_dataset(dataset_path)


