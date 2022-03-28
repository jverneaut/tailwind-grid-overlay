{
  const wrapperId = 'show-tailwind-grid-overlay';
  const container = document.querySelector(`#${wrapperId}`);

  const showGrid = () => {
    const prefix = getPrefix();

    const columns = [...Array(12)].map(
      (_, index) => `<div class="${prefix}grid-col-1"><div>${index + 1}</div></div>`
    );

    const html = `
    <div class="container">
      <div class="${prefix}grid ${prefix}grid-nested">
        <div class="${prefix}grid-row">
          ${columns.join('')}
        </div>
      </div>
    </div>
  `;

    const wrapper = document.createElement('div');
    wrapper.id = wrapperId;
    wrapper.innerHTML = html;

    document.body.appendChild(wrapper);
  };

  const hideGrid = () => {
    container.remove();
  };

  const getPrefix = () => {
    const targetClassName = 'grid-col';

    const elements = document.querySelectorAll(`[class*="${targetClassName}"]`);
    const classNames = Array.from(elements)
      .map((el) =>
        Array.from(el.classList)
          .filter((className) => className.includes(`${targetClassName}`))
          .map((className) => className.split(':').reverse()[0])
          .flat()
      )
      .flat();

    const prefixes = classNames.map((className) => className.split(targetClassName)[0]);

    const mostOccurringPrefix = prefixes
      .sort(
        (a, b) =>
          prefixes.filter((v) => v === a).length - prefixes.filter((v) => v === b).length
      )
      .pop();

    return mostOccurringPrefix;
  };

  if (container) {
    hideGrid();
  } else {
    showGrid();
  }
}
