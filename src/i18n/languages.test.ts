import en from './languages/en';
import es from './languages/es';
import ptBR from './languages/pt_BR';

const src: string = '../src';

describe('Language files', () => {
  const translationKeysEn = iterate(en, '', []);

  test('Translations keys EN & ES', () => {
    const translationKeysEs = iterate(es, '', []);
    expect(translationKeysEs).toEqual(translationKeysEn);
  });

  test('Translations keys EN & PT_BR', () => {
    const translationKeysPtBR = iterate(ptBR, '', []);
    expect(translationKeysPtBR).toEqual(translationKeysEn);
  });
});

function iterate(obj: any, stack: any, array: any) {
  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] === 'object') {
        iterate(obj[property], `${stack}.${property}`, array);
      } else {
        array.push(`${stack.slice(1)}.${property}`);
      }
    }
  }

  return array;
}
