# Analysis and Visualization of Social Media Data

Internship research and analysis project focused on exploring, analyzing, and visualizing social media discussion structures, user interactions, and comment hierarchies from Reddit data.

---

## 📁 Repository Structure

```text
AnalysisAndVisualizationOfSocialMediaData/
├── data/
│   ├── raw/                  # Raw Parquet datasets (ignored in Git; downloaded via loader)
│   └── processed/            # Intermediate or cleaned datasets
├── src/
│   ├── __init__.py           # Source package marker
│   └── loader.py             # Script to automatically fetch dataset from Hugging Face
├── outputs/
│   └── figures/              # Generated plots, diagrams, and hierarchy visualizations
├── main.ipynb                # Main exploratory data analysis & visualization notebook
├── requirements.txt          # Python project dependencies
├── .gitignore                # Git ignore configuration
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started (For Team Members)

### 1. Clone the Repository
```bash
git clone <repository-url>
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
python -m src.loader
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
3. Export visualization figures to `outputs/figures/`

---

## 🤝 Collaboration Guidelines

1. **Keep large files out of Git**: Never commit `.parquet`, `.rar`, or `.cache/` files to Git.
2. **Feature branches**: Create feature branches (`git checkout -b feature/your-feature`) for new analysis tasks or scripts.
3. **Clean notebooks**: Clear large notebook outputs before committing if the diff is too noisy, or push clean checkpoints.
