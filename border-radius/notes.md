Вам дана HTML-кнопка с подсказкой (tooltip), которая появляется, когда пользователь наводит курсор на кнопку "Help". Ваша задача:1.Скрыть подсказку по умолчанию.2.Добавить цвет фона и цвет текста, чтобы она выделялась.3.Центрировать текст внутри подсказки.4.Добавить внутренние отступы (padding), чтобы подсказка выглядела лучше.5.Закруглить углы с помощью border-radius.

<!DOCTYPE html>
<html>
<head>
  <title>Tooltips</title>
  <style>
    .tooltip-container {
      position: relative;
      display: inline-block;
      margin: 50px;
    }
    
    button {
      padding: 8px 16px;
      cursor: pointer;
    }
    
    .tooltip {
      
      /* Animation properties */
      opacity: 0;
      transition: opacity 0.3s;
    }
    
    /* Show the tooltip when hovering over the container */
    .tooltip-container:hover .tooltip {
      visibility: visible;
      opacity: 1;
    }
  </style>
</head>
<body>
  <div class="tooltip-container">
    <button>Help</button>
    <span class="tooltip">Click for assistance</span>
  </div>
</body>
</html>
