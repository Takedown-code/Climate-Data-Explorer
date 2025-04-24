# 🌍 Climate Data Explorer

An interactive front-end web application that allows users to explore climate change metrics over different decades. Built with HTML, CSS, JavaScript, and Chart.js, the site provides a clean and responsive interface where users can dynamically view trends in global **temperature**, **sea level**, and **CO₂ levels**.

---

## 🚀 Live Demo

[Click here to view the project on GitHub Pages](https://takedown-code.github.io/Climate-Data-Explorer/)

---

## 📌 Features (Current)

- 📊 Interactive line chart using [Chart.js](https://www.chartjs.org/)
- 🔄 Dropdowns to select climate metric and year range
- 💡 Real-time updates to chart based on user input
- ✅ Fully responsive layout for mobile and desktop
- 🎨 Modern, professional design

---

## 🔭 Future Features (Planned)

- 🌐 Integration with real-time climate data APIs (e.g., NASA, NOAA)
- 📅 Custom year sliders instead of fixed ranges
- 🗺️ Country/region selector for localized data
- 🌙 Dark mode toggle
- 📥 Export graph to image or PDF

---

## 👥 User Stories

> These represent potential use cases and motivations for users.

- *As a student*, I want to explore how temperature and CO₂ levels have changed over time so I can use real visuals in my school presentation.
- *As a teacher*, I want to show my class interactive graphs of climate trends to increase engagement and awareness.
- *As a data enthusiast*, I want to switch between metrics easily and understand correlations between them over time.

---

## 🎯 Goals of the Website

- **Educate** users about the importance of climate trends through intuitive visuals.
- **Empower** users to engage with data directly in an interactive way.
- **Inspire** curiosity and further exploration of real-world environmental datasets.

---

## 🧩 Wireframes

To plan the layout and user interface of the Climate Data Explorer, a desktop wireframe was created. This helped visualize the placement of key UI components including the metric selector, year range filter, chart area, and footer.

### Desktop Layout

![Climate Data Explorer Wireframe](./assets/wireframes/wireframe-climate.png)

> This wireframe served as a foundational guide for layout structure, ensuring that the final implementation was clean, user-friendly, and responsive across devices.


---

## 🧪 Testing Documentation

**Browsers tested:**
- Chrome ✅
- Firefox ✅
- Microsoft Edge ✅
- Safari ✅

**Test Cases:**
- Selecting different metrics and year ranges updates the chart as expected
- Layout adjusts cleanly on screens below 600px
- Chart renders correctly on page load
- Dropdowns are accessible via keyboard and mouse
- Page loads in under 1 second (measured locally)

> Automated testing not included in this version — manual functional testing only.

---

## 🛠️ Built With

- **HTML5** – Structure
- **CSS3** – Styling and responsive layout
- **JavaScript (Vanilla)** – User interaction
- **Chart.js** – Dynamic data visualization

---

## 📂 Project Structure

```
📁 climate-data-explorer/
│
├──assets/
│   └── wireframes/
│        └── climate-wireframe.png
├── index.html       # Main HTML page
├── README.md        # Project overview and documentation
├── script.js        # JavaScript logic for interactivity
└── style.css        # Stylesheet

```

---

## 📈 Data Sources

> All data in this demo is **simulated** and for demonstration purposes only.  
In future versions, real-time data can be pulled from APIs such as:
- [NASA EarthData](https://earthdata.nasa.gov/)
- [NOAA Climate Data](https://www.ncei.noaa.gov/)

---

## ✅ How to Use

1. Clone or download this repository:
   ```bash
   git clone https://github.com/Takedown-code/climate-data-explorer.git
   ```
2. Open `index.html` in your browser.
3. Use the dropdowns to select a **climate metric** and **year range**.
4. The graph will update automatically!

---

## 🚚 Deployment

This project is deployed via **GitHub Pages**:

1. Push to your GitHub repository.
2. Go to the repository settings → Pages.
3. Select branch `main` and folder `/root`.
4. Save settings. Your site will be live shortly!

---

## 👤 Author

[GitHub Profile](https://github.com/Takedown-code)

---

## 🙏 Acknowledgements

- [Chart.js](https://www.chartjs.org/) – for powering the interactive charts
- UI inspiration from Google Data Studio and NASA dashboards
- **AI-assisted development** using [ChatGPT](https://openai.com/chatgpt) by OpenAI

> AI support helped with:
> - Structuring the project
> - Refining feature ideas and UX flow
> - Enhancing the UI with professional CSS

---
