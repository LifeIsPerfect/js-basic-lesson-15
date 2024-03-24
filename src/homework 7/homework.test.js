import { JSDOM } from 'jsdom';

describe('Homework #7', () => {
  beforeEach(() => {
    const dom = new JSDOM();
    global.window = dom.window;
    global.document = dom.window.document;

    document.body.innerHTML = `
      <body>
          <div class="block">
              <p class="text">Paragraph 1</p>
              <p class="text">Paragraph 2</p>
              <p class="text">Paragraph 3</p>
          </div>
          <input class="text-input" type="text">
          <button class="button">Go!</button>
      </body>
      `;

    require('./homework'); // Здесь добавляются коллбеки на нажатие кнопки и на изменение текста в текстбоксе.
  });

  describe('Task #1. Button visibility', () => {
    it('Case #1', () => {
      expect(document.getElementsByClassName('button')[0]).not.toBeVisible();

      document.getElementsByClassName('text-input')[0].value = '123';
      // В этот момент должен сработать коллбек на событие 'change' и сделать кнопку видимой.
      expect(document.getElementsByClassName('button')[0]).toBeVisible();

      document.getElementsByClassName('text-input')[0].value = null;
      // В этот момент должен сработать коллбек на событие 'change' и сделать кнопку невидимой.
      expect(document.getElementsByClassName('button')[0]).not.toBeVisible();
    });
  });

  describe('Task #2. Button click', () => {
    it('Case #1', () => {
      expect(document.getElementsByClassName('button')[0]).not.toBeVisible();

      document.getElementsByClassName('text-input')[0].value = '123';
      // В этот момент должен сработать коллбек на событие 'change' и сделать кнопку видимой.
      expect(document.getElementsByClassName('button')[0]).toBeVisible();

      document.getElementsByClassName('button')[0].click();
      // В этот момент должен сработать коллбек на событие 'click', должно стать 4 параграфа,
      // текстбокс должен обнулиться и кнопка должна стать невидимой.
      expect(document.getElementsByClassName('text').length).toBe(4);
      expect(document.getElementsByClassName('text-input')[0].value).toBeNull();
      expect(document.getElementsByClassName('button')[0]).not.toBeVisible();
    });
  });

  describe('Task #3. More than 5 paragraphs', () => {
    it('Case #1', () => {
      document.getElementsByClassName('text-input')[0].value = '111';
      document.getElementsByClassName('button')[0].click();
      // Теперь параграфов 4.

      document.getElementsByClassName('text-input')[0].value = '222';
      document.getElementsByClassName('button')[0].click();
      // Теперь параграфов 5.

      document.getElementsByClassName('text-input')[0].value = '333';
      document.getElementsByClassName('button')[0].click();
      // А теперь по-прежнему должно остаться 5 параграфов.

      document.getElementsByClassName('text-input')[0].value = '444';
      document.getElementsByClassName('button')[0].click();

      document.getElementsByClassName('text-input')[0].value = '555';
      document.getElementsByClassName('button')[0].click();

      expect(document.getElementsByClassName('text').length).toBe(5);
      expect(document.getElementsByClassName('text')[0]).toBe('111'); // Чтобы убедиться, что удаляются сначала старые параграфы.
    });
  });
});
