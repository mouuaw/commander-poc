
import { CLI } from './cli';
import { Container } from 'inversify';
import { DefaultTemplate } from './templates/default.template';
import { FeatureRequest } from './templates/feature-request.template';
import { MergeRequest } from './templates/merge-request.template';

export function index(): CLI {
    const container: Container = new Container();

    container.bind<DefaultTemplate>('DefaultTemplate').to(DefaultTemplate).inSingletonScope();
    container.bind<FeatureRequest>('FeatureRequest').to(FeatureRequest).inSingletonScope();
    container.bind<MergeRequest>('MergeRequest').to(MergeRequest).inSingletonScope();
    container.bind<CLI>('CLI').to(CLI).inSingletonScope();

    return container.get<CLI>('CLI')
}

index();