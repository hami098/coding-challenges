# Coding Challenges - Self Learning Project

This is my self-learning project where I solve problems from the simplest to the most complex. It aims to tackle algorithm and data structure challenges in five different programming languages, similar to LeetCode practice.

## Project Structure

```
coding-challenges/
├── .gitignore
├── LICENSE
├── README.md
├── .vscode/
├── cpp/
│   └── template.cpp
├── python/
│   └── template.py
├── javascript/
│   └── template.js
├── rust/
│   └── template.rs
└── go/
    └── template.go
```

Each language folder contains solution files and a template file for starting new problems.

## Supported Languages

* **C++** (`cpp/`)
* **Python** (`python/`)
* **JavaScript** (`javascript/`)
* **Rust** (`rust/`)
* **Go** (`go/`)

## Installation

Clone the repository and install dependencies per language directory.

```bash
git clone <repository-url>
cd coding-challenges
```

### C++ (MSYS2 MinGW-w64)

Ensure MSYS2 and MinGW-w64 are installed, and `C:\msys64\mingw64\bin` is in your PATH. Then:

```bash
pacman -S mingw-w64-x86_64-boost
```

### Python

```bash
cd python
python -m venv .venv       # (optional) create virtual environment
source .venv/bin/activate   # Linux/macOS
.venv\Scripts\activate     # Windows
pip install -r requirements.txt
```

### JavaScript / Node.js

```bash
cd javascript
npm install
```

### Rust

```bash
cd rust
cargo install cargo-edit    # only once
cargo add ndarray           # add dependency
```

### Go

```bash
cd go
go mod tidy
go get gonum.org/v1/gonum@latest
```

## Usage Examples

Run solutions for each language:

```bash
# C++
g++ cpp/problem_name.cpp -o out/problem_name && out/problem_name

# Python
python python/problem_name.py

# JavaScript
node javascript/problem_name.js

# Rust
cd rust
cargo run --release -- template.rs

# Go
go run go/template.go
```

## Contributing

Feel free to submit pull requests to add new problems or improve existing solutions.

## License

This project is licensed under the Apache License 2.0. 
See the LICENSE file for details.
