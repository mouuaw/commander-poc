import { injectable, inject } from "inversify";
import { FeatureRequest } from './templates/feature-request.template';
import { MergeRequest } from './templates/merge-request.template';
import { Answer, ProviderChoiceValue, GithubChoiceValue, GitlabChoiceValue } from './models/answer-choice';
import { providerQuestion, githubFileQuestion, gitlabFileQuestion } from './questions';

@injectable()
export class CLI {
    constructor(
        @inject('FeatureRequest') private featureRequest: FeatureRequest,
        @inject('MergeRequest') private mergeRequest: MergeRequest
    ) {
        this.executeCLI();
    }

    public async executeCLI(): Promise<any> {
        let providerAnswer: Answer = await providerQuestion()

        if (providerAnswer.provider === ProviderChoiceValue.GITHUB) {
            return this.githubActions();
        } else if (providerAnswer.provider === ProviderChoiceValue.GITLAB) {
            return this.gitlabActions();
        }
    }

    private async githubActions() {
        let githubAnswer: Answer = await githubFileQuestion();

        switch (githubAnswer.files) {
            case GithubChoiceValue.FEATURE_REQUEST: {
                return this.featureRequest.generateFile()
            }
        }
    }

    private async gitlabActions() {
        let gitlabAnswer: Answer = await gitlabFileQuestion();

        switch (gitlabAnswer.files) {
            case GitlabChoiceValue.MERGE_REQUEST: {
                return this.mergeRequest.generateFile();
            }
        }
    }
}