import inquirer from 'inquirer'

import { Answer, GithubChoiceValue, Choice } from '../models/answer-choice';

export async function githubFileQuestion(): Promise<Answer> {
    const listOfFiles: Choice[] = [
        { name: "Feature request (issue)", value: GithubChoiceValue.FEATURE_REQUEST }
    ]

    return inquirer.prompt([{
        name: 'files',
        type: 'list',
        message: 'Which Github files do you want to generate?',
        choices: listOfFiles
    }])
}
