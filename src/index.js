function mergeNestedObject(parentObject, objectKey, object) {
  const updated = {...parentObject};
  updated[objectKey] = { ...updated[objectKey], ...object};
  return updated;
}

function deleteNestedObjects(parentObject, objectKeys) {
  const updated = {...parentObject};
  objectKeys.forEach( key => delete updated[key]);
  return updated;
}

function addToArray(array, index, objectOrPrimitive) {
  const updated = [...array];
  updated.splice(index, 0, objectOrPrimitive);
  return updated;
}

function changePrimitiveInsideArray(array, index, primitive) {
  const updated = [...array];
  updated[index] = primitive;
  return updated;
}

function mergeObjectInsideArray(array, index, object) {
  const updated = [...array];
  updated[index] = {...updated[index], ...object};
  return updated;
}

function changePositionInArray(array, oldIndex, newIndex) {
  const updated = [...array];
  const tmp = updated.splice(oldIndex, 1);
  updated.splice(newIndex, 0, tmp[0]);
  return updated;
}

const Pure = {
  Arr: {
    add: addToArray,
    changePosition: changePositionInArray,
    changePrimitive: changePrimitiveInsideArray,
    mergeObject: mergeObjectInsideArray
  },
  Obj: {
    mergeNestedObject: mergeNestedObject,
    deleteNestedObjects: deleteNestedObjects
  }
};

module.exports = Pure;
