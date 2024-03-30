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

  afterEach(() => {
    jest.resetModules();
  });

  describe('Task #1. Button visibility', () => {
    it('Case #1', () => {
      const button = document.getElementsByClassName('button')[0];
      const textbox = document.getElementsByClassName('text-input')[0];

      expect(button).not.toBeVisible();

      textbox.value = '123';
      textbox.dispatchEvent(new Event('change'));
      // В этот момент должен сработать коллбек на событие 'change' и сделать кнопку видимой.
      expect(button).toBeVisible();

      textbox.value = '';
      textbox.dispatchEvent(new Event('change'));
      // В этот момент должен сработать коллбек на событие 'change' и сделать кнопку невидимой.
      expect(button).not.toBeVisible();
    });
  });

  describe('Task #2. Button click', () => {
    it('Case #1', () => {
      const button = document.getElementsByClassName('button')[0];
      const textbox = document.getElementsByClassName('text-input')[0];
      const paragraphs = document.getElementsByClassName('text');

      expect(button).not.toBeVisible();

      textbox.value = '123';
      textbox.dispatchEvent(new Event('change'));
      // В этот момент должен сработать коллбек на событие 'change' и сделать кнопку видимой.
      expect(button).toBeVisible();

      button.click();

      // В этот момент должен сработать коллбек на событие 'click', должно стать 4 параграфа,
      // текстбокс должен обнулиться и кнопка должна стать невидимой.
      expect(paragraphs.length).toBe(4);
      expect(paragraphs[3].innerHTML).toBe('123');
      expect(textbox.value).toBe('');
      expect(button).not.toBeVisible();
    });
  });

  describe('Task #3. More than 5 paragraphs', () => {
    it('Case #1', () => {
      const textbox = document.getElementsByClassName('text-input')[0];
      const button = document.getElementsByClassName('button')[0];
      const paragraphs = document.getElementsByClassName('text');

      for (let i = 0; i < 5; i++) {
        textbox.value = i;
        textbox.dispatchEvent(new Event('change'));
        button.click();
      }
      // Сначала было 3 параграфа, добавили ещё 5. Должно остаться 5 последних.

      expect(paragraphs.length).toBe(5);
      expect(paragraphs[0].innerHTML).toBe('0'); // Проверяем, что удаляются сначала старые параграфы.
    });
  });
});
