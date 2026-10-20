// Небольшие улучшения взаимодействия меню.
document.querySelectorAll('.dish, .dessert-card').forEach((item, index) => {
  item.style.setProperty('--item-order', index);
});
