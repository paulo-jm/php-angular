import { DoadorModule } from './doador.module';

describe('DoadorModule', () => {
  let doadorModule: DoadorModule;

  beforeEach(() => {
    doadorModule = new DoadorModule();
  });

  it('should create an instance', () => {
    expect(doadorModule).toBeTruthy();
  });
});
