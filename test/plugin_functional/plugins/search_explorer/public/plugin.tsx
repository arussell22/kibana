/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Plugin, CoreSetup } from 'kibana/public';
import { ISearchAppMountContext } from '../../../../../src/plugins/data/public';

declare module 'kibana/public' {
  interface AppMountContext {
    search?: ISearchAppMountContext;
  }
}
export class SearchExplorerPlugin implements Plugin {
  public setup(core: CoreSetup) {
    core.application.register({
      id: 'searchExplorer',
      title: 'Search Explorer',
      async mount(context, params) {
        const { renderApp } = await import('./application');
        return renderApp(context, params);
      },
    });
  }

  public start() {}
  public stop() {}
}
