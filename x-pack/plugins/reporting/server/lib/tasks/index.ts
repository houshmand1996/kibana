/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { BasePayload } from '../../types';
import { ReportSource } from '../store/report';

/*
 * The document created by Reporting to store as task parameters for Task
 * Manager to reference the report in .reporting
 */
export interface ReportTaskParams<JobPayloadType = BasePayload> {
  id: string;
  index?: string; // For ad-hoc, which as an existing "pending" record
  payload: JobPayloadType;
  created_at: ReportSource['created_at'];
  created_by: ReportSource['created_by'];
  jobtype: ReportSource['jobtype'];
  attempts: ReportSource['attempts'];
  meta: ReportSource['meta'];
}

export interface TaskRunResult {
  content_type: string | null;
  content: string | null;
  csv_contains_formulas?: boolean;
  size: number;
  max_size_reached?: boolean;
  warnings?: string[];
}
