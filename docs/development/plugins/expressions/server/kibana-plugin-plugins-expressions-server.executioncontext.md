<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-expressions-server](./kibana-plugin-plugins-expressions-server.md) &gt; [ExecutionContext](./kibana-plugin-plugins-expressions-server.executioncontext.md)

## ExecutionContext interface

`ExecutionContext` is an object available to all functions during a single execution; it provides various methods to perform side-effects.

<b>Signature:</b>

```typescript
export interface ExecutionContext<InspectorAdapters extends Adapters = Adapters> 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [abortSignal](./kibana-plugin-plugins-expressions-server.executioncontext.abortsignal.md) | <code>AbortSignal</code> | Adds ability to abort current execution. |
|  [getSavedObject](./kibana-plugin-plugins-expressions-server.executioncontext.getsavedobject.md) | <code>&lt;T extends SavedObjectAttributes = SavedObjectAttributes&gt;(type: string, id: string) =&gt; Promise&lt;SavedObject&lt;T&gt;&gt;</code> | Allows to fetch saved objects from ElasticSearch. In browser <code>getSavedObject</code> function is provided automatically by the Expressions plugin. On the server the caller of the expression has to provide this context function. The reason is because on the browser we always know the user who tries to fetch a saved object, thus saved object client is scoped automatically to that user. However, on the server we can scope that saved object client to any user, or even not scope it at all and execute it as an "internal" user. |
|  [getSearchContext](./kibana-plugin-plugins-expressions-server.executioncontext.getsearchcontext.md) | <code>() =&gt; ExecutionContextSearch</code> | Get search context of the expression. |
|  [getSearchSessionId](./kibana-plugin-plugins-expressions-server.executioncontext.getsearchsessionid.md) | <code>() =&gt; string &#124; undefined</code> | Search context in which expression should operate. |
|  [inspectorAdapters](./kibana-plugin-plugins-expressions-server.executioncontext.inspectoradapters.md) | <code>InspectorAdapters</code> | Adapters for <code>inspector</code> plugin. |
|  [types](./kibana-plugin-plugins-expressions-server.executioncontext.types.md) | <code>Record&lt;string, ExpressionType&gt;</code> | A map of available expression types. |
|  [variables](./kibana-plugin-plugins-expressions-server.executioncontext.variables.md) | <code>Record&lt;string, unknown&gt;</code> | Context variables that can be consumed using <code>var</code> and <code>var_set</code> functions. |

