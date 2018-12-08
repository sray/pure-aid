# Pure-Aid - your purity helper when using normalizr and redux-undo

As described on Stackoverflow (https://stackoverflow.com/questions/34954726/how-do-you-add-remove-to-a-redux-store-generated-with-normalizr) by m0meni, I ran into the exact same problem and got tired of writing the same three lines all over my reducers again and again. So here is a tiny collections of pure functions which covers the little gap in "normalizr". You might not run into an immutability issue, if you do not have an undo functionality. But, as soon as you do, pure-aid saves you some code duplication and helps to keep your reducers short and readable ;-) You can embed pure-aid seamlessly in your es6-style code. If you project is still coded in es5, you will need to add a babel translation step to your pipeline to translate the object spread syntax (https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread).

## Install

```javascript
npm install --save pure-aid
```

## Usage

```javascript
  import Pure from 'pure-aid';

  const sample = {
    1: {
      id: 1,
      name: 'sample 1'
    },
    3: {
      id: 3,
      name: 'sample 3'
    },    
    5: {
      id: 5,
      name: 'sample 5'
    },
  }

  const newName = 'example';

  // add object (without normalizing, denormalizing everything)
  const extendedSample = Pure.Obj.mergeNestedObject(sample, 4, { id: 4, name: newName });
  // update object
  const mergedSample = Pure.Obj.mergeNestedObject(sample, 3, name: newName });
  // delete one or more objects without normalizing and denormalizing everything
  const cleanedSample = Pure.Obj.deleteNestedObjects(sample, [1, 3]);

  // Objects inside arrays
  const array = [ { id: 10, name: 'item 10'}, { id: 11, name: 'item 11'} ];

  // add object to array
  const extendedArray = Pure.Arr.add(array, 1, { id: 20, name: 'item 20'});
  // order in extendedArray is [10, 20, 11]
  // merge object inside array
  const mergedArray = Pure.Arr.mergeObject(array, 0, { name: newName });
  // change position in array
  const reorderedArray = Pure.Arr.changePosition(array, 0, 1);

  // merge primitive in array
  const primArray = ['a', 'b', 'c'];
  const updatedArray = Pure.Arr.mergeObject(primitiveArray, 1, 'd');
```
