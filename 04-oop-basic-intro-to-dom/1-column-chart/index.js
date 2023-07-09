export default class ColumnChart {
  chartHeight = 50;

  constructor(options) {
    const {data, label, value, link, formatHeading} = options ?? {}; 
    this.data = data ?? [];
    this.label = label ?? '';
    this.value = value ?? 0;
    this.link = link ?? null;
    this.formatHeading = formatHeading ?? null;

    this.element = this._build();
  }

  update(data) {
    this.data = data;
    this.element.querySelector('.column-chart__chart').innerHTML = this._renderChart();
  }

  remove() {
    this.element.remove();
  }
  
  destroy() {
    this.remove();
    this.element = null;
  }

  _isEmptyData() {
    return this.data.length === 0;
  }


  _build() {
    const rootElement = document.createElement("div");
    rootElement.id = this.label;
    rootElement.className = `dashboard__chart_${this.label} ${this._isEmptyData() ? "column-chart_loading" : ""}`
    rootElement.innerHTML = this._tempate();
    return rootElement;
  }

  _tempate() {
    return `
      <div class="column-chart" style="--chart-height: ${this.chartHeight}">
        <div class="column-chart__title">
          ${this.label}
          ${this.link ? `<a class="column-chart__link" href="${this.link}">View all</a>` : ''}
        </div>
        <div class="column-chart__container">
            <div data-element="header" class="column-chart__header">
                ${this.formatHeading ? this.formatHeading(this.value) : this.value}
            </div>
            <div data-element="body" class="column-chart__chart">
                ${this._renderChart()}
            </div>
        </div>
      </div>`;
  }

  _renderChart() {
    if (this._isEmptyData()) {
      return ``;
    }

    const maxValue = Math.max(...this.data);
    return this.data
      .map((column) => {
        const percent = Math.round((column * 100) / maxValue);
        const normalizedValue = Math.trunc(percent * this.chartHeight / 100);
        return `<div style="--value: ${normalizedValue}" data-value="${column}" data-tooltip="${percent}%"></div>`;
      })
      .join("");
  }
}
