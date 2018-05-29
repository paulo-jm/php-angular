import { ContribuicaoModule } from './contribuicao.module';

describe('ContribuicaoModule', () => {
  let contribuicaoModule: ContribuicaoModule;

  beforeEach(() => {
    contribuicaoModule = new ContribuicaoModule();
  });

  it('should create an instance', () => {
    expect(contribuicaoModule).toBeTruthy();
  });
});
