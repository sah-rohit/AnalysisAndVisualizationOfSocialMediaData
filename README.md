# Analysis and Visualization of Social Media Data

Internship research and analysis project focused on exploring, analyzing, and visualizing social media discussion structures, user interactions, and comment hierarchies from Reddit data.

---

## 📁 Repository Structure

```text
AnalysisAndVisualizationOfSocialMediaData/
├── data/
│   ├── raw/                  # Raw Parquet datasets (ignored in Git; downloaded via loader)
│   └── processed/            # Intermediate or cleaned datasets
├── scripts/
│   ├── __init__.py           # Package marker
│   ├── loader.py             # Script to automatically fetch dataset from Hugging Face
│   └── parquet_to_csv.py     # Script to convert raw parquet data to CSV format
├── outputs/
│   └── figures/              # Generated plots, diagrams, and hierarchy visualizations
├── static-site/              # Interactive project presentation website (HTML/CSS/JS)
│   ├── assets/notebook/      # Visual assets, figures, and interactive tree inspector
│   ├── index.html            # Main presentation report
│   ├── script.js             # Navigation, smooth scroll, and inspector toggle
│   └── styles.css            # Swiss editorial responsive stylesheet
├── main.ipynb                # Main exploratory data analysis & visualization notebook
├── requirements.txt          # Python project dependencies
├── .gitignore                # Git ignore configuration
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started (For Team Members)

### 1. Clone the Repository
```bash
git clone https://github.com/sah-rohit/AnalysisAndVisualizationOfSocialMediaData.git
cd AnalysisAndVisualizationOfSocialMediaData
```

### 2. Set Up a Virtual Environment
It is recommended to use a dedicated Python virtual environment (Python 3.10+):

**Windows (PowerShell):**
```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

**macOS / Linux:**
```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

> **Note for Graphviz:** If you are rendering network trees with Graphviz, ensure the Graphviz system binary is installed on your OS ([download page](https://graphviz.org/download/)) and added to your system `PATH`.

---

## 📥 Fetching the Dataset

The primary dataset (`~240 MB` raw parquet) is hosted on Hugging Face and is excluded from Git to keep the repository lightweight and adhere to GitHub's file size limits.

Run the loader script to download the dataset into `data/raw/`:

```bash
python scripts/loader.py
```

Optional: To convert raw Parquet data into CSV format, run:

```bash
python scripts/parquet_to_csv.py
```

This will download:
- `data/raw/data/programming-00000-of-00007-682384b233d9a62b.parquet`

---

## 📊 Running the Analysis

Launch Jupyter Notebook or JupyterLab:

```bash
jupyter lab
# or
jupyter notebook
```

Open `main.ipynb` and run the cells to:
1. Load and query Parquet data with DuckDB
2. Analyze comment trees, thread hierarchy, and controversiality
3. Perform VADER sentiment scoring and technical importance classification
4. Export visualization figures to `outputs/figures/`

---

## 🌐 Project Presentation Website

The repository includes a responsive editorial presentation website in `static-site/` showcasing the project overview, problem statement, methodology, interactive DAG comment tree, sentiment breakdowns, and research findings:

- Open [`static-site/index.html`](file:///c:/Users/Medam%20Hexnebyek/Desktop/AnalysisAndVisualizationOfSocialMediaData/static-site/index.html) in any browser, or run a local server:
  ```bash
  python -m http.server 8000 --directory static-site
  ```
  Visit `http://localhost:8000` to explore the report.

---

## 🤝 Collaboration Guidelines

1. **Keep large files out of Git**: Never commit `.parquet`, `.rar`, or `.cache/` files to Git.
2. **Feature branches**: Create feature branches (`git checkout -b feature/your-feature`) for new analysis tasks or scripts.
3. **Clean notebooks**: Clear large notebook outputs before committing if the diff is too noisy, or push clean checkpoints.
