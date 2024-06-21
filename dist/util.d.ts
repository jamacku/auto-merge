import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';
export declare function updateStatusCheck(octokit: Octokit, checkID: number, status: Endpoints['POST /repos/{owner}/{repo}/check-runs']['parameters']['status'], conclusion: Endpoints['POST /repos/{owner}/{repo}/check-runs']['parameters']['conclusion'], message: string): Promise<void>;
export declare function getFailedMessage(error: string[]): string;
export declare function getSuccessMessage(message: string[]): string;
export declare function setLabels(octokit: Octokit, issueNumber: number, labels: string[]): Promise<void>;
export declare function removeLabel(octokit: Octokit, issueNumber: number, label: string): Promise<void>;
export declare function raise(error: string): never;
