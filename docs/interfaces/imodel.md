[redux-data-service](../README.md) > [IModel](../interfaces/imodel.md)

# Interface: IModel

## Type parameters
#### T :  [IModelData](imodeldata.md)
#### T 
#### T 
#### T 
#### T 
#### T 
## Hierarchy

 [IModelMeta](imodelmeta.md)<`T`>

 [IModelData](imodeldata.md)

↳  [IAttrs](iattrs.md)

↳  [IRelationship](irelationship.md)

**↳ IModel**

↳  [IFakeModel](ifakemodel.md)

## Implemented by

* [FakeModel](../classes/fakemodel.md)
* [Model](../classes/model.md)

## Index

### Properties

* [changes](imodel.md#changes)
* [dateDeleted](imodel.md#datedeleted)
* [dateUpdated](imodel.md#dateupdated)
* [errors](imodel.md#errors)
* [fields](imodel.md#fields)
* [hasUnsavedChanges](imodel.md#hasunsavedchanges)
* [id](imodel.md#id)
* [isDirty](imodel.md#isdirty)
* [isLoading](imodel.md#isloading)
* [isNew](imodel.md#isnew)
* [isShadow](imodel.md#isshadow)
* [relationships](imodel.md#relationships)
* [serviceName](imodel.md#servicename)
* [validationRules](imodel.md#validationrules)

### Methods

* [applyUpdates](imodel.md#applyupdates)
* [forceReload](imodel.md#forcereload)
* [getField](imodel.md#getfield)
* [getRelated](imodel.md#getrelated)
* [getServiceForRelationship](imodel.md#getserviceforrelationship)
* [initializeNewModel](imodel.md#initializenewmodel)
* [markForDestruction](imodel.md#markfordestruction)
* [parseFieldValue](imodel.md#parsefieldvalue)
* [reset](imodel.md#reset)
* [save](imodel.md#save)
* [saveModel](imodel.md#savemodel)
* [saveRelatedModels](imodel.md#saverelatedmodels)
* [setField](imodel.md#setfield)
* [setRelated](imodel.md#setrelated)
* [unload](imodel.md#unload)
* [validate](imodel.md#validate)
* [validateField](imodel.md#validatefield)

---

## Properties

<a id="changes"></a>

### `<Optional>` changes

**● changes**: *`Partial`<`T`>*

*Inherited from [IModelMeta](imodelmeta.md).[changes](imodelmeta.md#changes)*

*Defined in [Model/IModel.ts:19](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L19)*

___
<a id="datedeleted"></a>

###  dateDeleted

**● dateDeleted**: *`Date`*

*Inherited from [IModelData](imodeldata.md).[dateDeleted](imodeldata.md#datedeleted)*

*Defined in [Model/IModel.ts:9](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L9)*

___
<a id="dateupdated"></a>

###  dateUpdated

**● dateUpdated**: *`Date`*

*Inherited from [IModelData](imodeldata.md).[dateUpdated](imodeldata.md#dateupdated)*

*Defined in [Model/IModel.ts:8](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L8)*

___
<a id="errors"></a>

###  errors

**● errors**: *[IModelKeys](../#imodelkeys)<`T`>*

*Inherited from [IModelMeta](imodelmeta.md).[errors](imodelmeta.md#errors)*

*Defined in [Model/IModel.ts:20](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L20)*

___
<a id="fields"></a>

###  fields

**● fields**: *[IModelKeys](../#imodelkeys)<`T`, [IFieldType](ifieldtype.md)>*

*Inherited from [IAttrs](iattrs.md).[fields](iattrs.md#fields)*

*Overrides [IFieldTypes](ifieldtypes.md).[fields](ifieldtypes.md#fields)*

*Defined in [Model/Decorators/Attr.ts:11](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/Decorators/Attr.ts#L11)*

___
<a id="hasunsavedchanges"></a>

###  hasUnsavedChanges

**● hasUnsavedChanges**: *`boolean`*

*Defined in [Model/IModel.ts:25](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L25)*

___
<a id="id"></a>

###  id

**● id**: *`string`*

*Inherited from [IModelData](imodeldata.md).[id](imodeldata.md#id)*

*Defined in [Model/IModel.ts:7](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L7)*

___
<a id="isdirty"></a>

###  isDirty

**● isDirty**: *`boolean`*

*Defined in [Model/IModel.ts:24](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L24)*

___
<a id="isloading"></a>

###  isLoading

**● isLoading**: *`boolean`*

*Inherited from [IModelMeta](imodelmeta.md).[isLoading](imodelmeta.md#isloading)*

*Defined in [Model/IModel.ts:18](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L18)*

___
<a id="isnew"></a>

###  isNew

**● isNew**: *`boolean`*

*Defined in [Model/IModel.ts:26](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L26)*

___
<a id="isshadow"></a>

###  isShadow

**● isShadow**: *`boolean`*

*Inherited from [IModelMeta](imodelmeta.md).[isShadow](imodelmeta.md#isshadow)*

*Defined in [Model/IModel.ts:17](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L17)*

___
<a id="relationships"></a>

###  relationships

**● relationships**: *`object`*

*Inherited from [IRelationship](irelationship.md).[relationships](irelationship.md#relationships)*

*Defined in [Model/Decorators/Relationship.ts:43](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/Decorators/Relationship.ts#L43)*

#### Type declaration

[key: `string`]: [IFieldRelationship](ifieldrelationship.md)

___
<a id="servicename"></a>

###  serviceName

**● serviceName**: *`string`*

*Defined in [Model/IModel.ts:27](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L27)*

___
<a id="validationrules"></a>

###  validationRules

**● validationRules**: *[IModelKeys](../#imodelkeys)<`T`>*

*Inherited from [IValidate](ivalidate.md).[validationRules](ivalidate.md#validationrules)*

*Overrides [IValidate](ivalidate.md).[validationRules](ivalidate.md#validationrules)*

*Defined in [Model/Decorators/Validation.ts:6](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/Decorators/Validation.ts#L6)*

___

## Methods

<a id="applyupdates"></a>

###  applyUpdates

▸ **applyUpdates**(changes?: *`Partial`<`T`>*, meta?: *`Partial`<[IModelMeta](imodelmeta.md)<`T`>>*, relationships?: *`any`*): [IModel](imodel.md)<`T`>

*Defined in [Model/IModel.ts:36](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L36)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` changes | `Partial`<`T`> |
| `Optional` meta | `Partial`<[IModelMeta](imodelmeta.md)<`T`>> |
| `Optional` relationships | `any` |

**Returns:** [IModel](imodel.md)<`T`>

___
<a id="forcereload"></a>

###  forceReload

▸ **forceReload**(): `void`

*Defined in [Model/IModel.ts:35](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L35)*

**Returns:** `void`

___
<a id="getfield"></a>

###  getField

▸ **getField**(fieldName: *`any`*, defaultValue: *`any`*): `any`

*Inherited from [IAttrs](iattrs.md).[getField](iattrs.md#getfield)*

*Defined in [Model/Decorators/Attr.ts:12](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/Decorators/Attr.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fieldName | `any` |
| defaultValue | `any` |

**Returns:** `any`

___
<a id="getrelated"></a>

###  getRelated

▸ **getRelated**(key: *`any`*): `any`

*Inherited from [IRelationship](irelationship.md).[getRelated](irelationship.md#getrelated)*

*Defined in [Model/Decorators/Relationship.ts:45](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/Decorators/Relationship.ts#L45)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `any` |

**Returns:** `any`

___
<a id="getserviceforrelationship"></a>

###  getServiceForRelationship

▸ **getServiceForRelationship**(relationshipKey: *`string`*): [DataService](../classes/dataservice.md)<`any`>

*Defined in [Model/IModel.ts:40](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L40)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| relationshipKey | `string` |

**Returns:** [DataService](../classes/dataservice.md)<`any`>

___
<a id="initializenewmodel"></a>

###  initializeNewModel

▸ **initializeNewModel**(): `void`

*Defined in [Model/IModel.ts:37](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L37)*

**Returns:** `void`

___
<a id="markfordestruction"></a>

###  markForDestruction

▸ **markForDestruction**(): `void`

*Defined in [Model/IModel.ts:38](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L38)*

**Returns:** `void`

___
<a id="parsefieldvalue"></a>

###  parseFieldValue

▸ **parseFieldValue**(fieldName: *`string`*, value: *`any`*): `Promise`<`any`>

*Defined in [Model/IModel.ts:39](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L39)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fieldName | `string` |
| value | `any` |

**Returns:** `Promise`<`any`>

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*Defined in [Model/IModel.ts:33](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L33)*

**Returns:** `void`

___
<a id="save"></a>

###  save

▸ **save**(): `Promise`<[IModel](imodel.md)<`T`>>

*Defined in [Model/IModel.ts:28](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L28)*

**Returns:** `Promise`<[IModel](imodel.md)<`T`>>

___
<a id="savemodel"></a>

###  saveModel

▸ **saveModel**(): `Promise`<[IModel](imodel.md)<`T`>>

*Defined in [Model/IModel.ts:29](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L29)*

**Returns:** `Promise`<[IModel](imodel.md)<`T`>>

___
<a id="saverelatedmodels"></a>

###  saveRelatedModels

▸ **saveRelatedModels**(): `Promise`<[IModel](imodel.md)<`T`>[]>

*Defined in [Model/IModel.ts:30](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L30)*

**Returns:** `Promise`<[IModel](imodel.md)<`T`>[]>

___
<a id="setfield"></a>

###  setField

▸ **setField**(fieldName: *`any`*, value: *`any`*): `void`

*Inherited from [IAttrs](iattrs.md).[setField](iattrs.md#setfield)*

*Defined in [Model/Decorators/Attr.ts:13](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/Decorators/Attr.ts#L13)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fieldName | `any` |
| value | `any` |

**Returns:** `void`

___
<a id="setrelated"></a>

###  setRelated

▸ **setRelated**(key: *`any`*, value: *`any`*): `void`

*Inherited from [IRelationship](irelationship.md).[setRelated](irelationship.md#setrelated)*

*Defined in [Model/Decorators/Relationship.ts:47](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/Decorators/Relationship.ts#L47)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `any` |
| value | `any` |

**Returns:** `void`

___
<a id="unload"></a>

###  unload

▸ **unload**(): `void`

*Defined in [Model/IModel.ts:34](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L34)*

**Returns:** `void`

___
<a id="validate"></a>

###  validate

▸ **validate**(): [IModelKeys](../#imodelkeys)<`T`>

*Overrides [IValidate](ivalidate.md).[validate](ivalidate.md#validate)*

*Defined in [Model/IModel.ts:31](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L31)*

**Returns:** [IModelKeys](../#imodelkeys)<`T`>

___
<a id="validatefield"></a>

###  validateField

▸ **validateField**(fieldName: *`string`*): [IModelKeys](../#imodelkeys)<`T`>

*Defined in [Model/IModel.ts:32](https://github.com/Rediker-Software/redux-data-service/blob/a126781/src/Model/IModel.ts#L32)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fieldName | `string` |

**Returns:** [IModelKeys](../#imodelkeys)<`T`>

___

