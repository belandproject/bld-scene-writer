export const boxSample = `
bld.subscribe('sceneStart');

bld.addEntity('1');
bld.setParent('1', '0');
bld.componentCreated('boxShape', 'engine.shape', 16);
bld.componentUpdated('boxShape', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true}));
bld.attachEntityComponent('1', 'engine.shape', 'boxShape');
bld.updateEntityComponent('1', 'engine.transform', 1, JSON.stringify({"position":{"x":5,"y":0,"z":5},"rotation":{"x":0,"y":0,"z":1,"w":0},"scale":{"x":1,"y":1,"z":1}}));
`

export const gltfSample = `
bld.subscribe('sceneStart');

bld.addEntity('1');
bld.setParent('1', '0');
bld.componentCreated('gltfShape', 'engine.shape', 54);
bld.componentUpdated('gltfShape', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true,"src":"./Skeleton.gltf"}));
bld.attachEntityComponent('1', 'engine.shape', 'gltfShape');
bld.updateEntityComponent('1', 'engine.transform', 1, JSON.stringify({"position":{"x":0,"y":0,"z":0},"rotation":{"x":0,"y":2,"z":1,"w":0},"scale":{"x":1,"y":1,"z":1}}));
`

export const ntfShape = `
bld.subscribe('sceneStart');

bld.addEntity('1');
bld.setParent('1', '0');
bld.componentCreated('nftShape', 'engine.shape', 22);
bld.componentUpdated('nftShape', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true,"src":"ethereum://0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/38376","color":{"r":255,"g":0,"b":0},"style":0}));
bld.attachEntityComponent('1', 'engine.shape', 'nftShape');
`

export const correctTransformName = `
bld.subscribe('sceneStart');

bld.addEntity('1');
bld.setParent('1', '0');
bld.updateEntityComponent('1', 'engine.transform', 1, JSON.stringify({"position":{"x":0,"y":0,"z":0},"rotation":{"x":0,"y":2,"z":1,"w":0},"scale":{"x":1,"y":1,"z":1}}));

bld.addEntity('2');
bld.setParent('2', '0');
bld.updateEntityComponent('2', 'engine.transform', 1, JSON.stringify({"position":{"x":0,"y":0,"z":0},"rotation":{"x":0,"y":2,"z":1,"w":0},"scale":{"x":1,"y":1,"z":1}}));
`

export const sphereAndBoxSample = `
bld.subscribe('sceneStart');

bld.addEntity('1');
bld.setParent('1', '0');
bld.componentCreated('sphereShape', 'engine.shape', 17);
bld.componentUpdated('sphereShape', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true}));
bld.attachEntityComponent('1', 'engine.shape', 'sphereShape');

bld.addEntity('2');
bld.setParent('2', '0');
bld.componentCreated('boxShape', 'engine.shape', 16);
bld.componentUpdated('boxShape', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true}));
bld.attachEntityComponent('2', 'engine.shape', 'boxShape');
`

export const parentSample = `
bld.subscribe('sceneStart');

bld.addEntity('1');
bld.setParent('1', '0');
bld.componentCreated('sphereShape', 'engine.shape', 17);
bld.componentUpdated('sphereShape', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true}));
bld.attachEntityComponent('1', 'engine.shape', 'sphereShape');

bld.addEntity('2');
bld.setParent('2', '1');
bld.componentCreated('boxShape', 'engine.shape', 16);
bld.componentUpdated('boxShape', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true}));
bld.attachEntityComponent('2', 'engine.shape', 'boxShape');
`

export const reuseComponentSample = `
bld.subscribe('sceneStart');

bld.addEntity('1');
bld.setParent('1', '0');
bld.componentCreated('gltfShape', 'engine.shape', 54);
bld.componentUpdated('gltfShape', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true,"src":"./Skeleton.gltf"}));
bld.attachEntityComponent('1', 'engine.shape', 'gltfShape');

bld.addEntity('2');
bld.setParent('2', '0');
bld.attachEntityComponent('2', 'engine.shape', 'gltfShape');
`

export const multipleComponentsSample = `
bld.subscribe('sceneStart');

bld.addEntity('1');
bld.setParent('1', '0');
bld.componentCreated('gltfShape', 'engine.shape', 54);
bld.componentUpdated('gltfShape', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true,"src":"./Tree.gltf"}));
bld.attachEntityComponent('1', 'engine.shape', 'gltfShape');

bld.addEntity('2');
bld.setParent('2', '0');
bld.componentCreated('gltfShape2', 'engine.shape', 54);
bld.componentUpdated('gltfShape2', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true,"src":"./Rock.gltf"}));
bld.attachEntityComponent('2', 'engine.shape', 'gltfShape2');

bld.addEntity('3');
bld.setParent('3', '0');
bld.componentCreated('gltfShape3', 'engine.shape', 54);
bld.componentUpdated('gltfShape3', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true,"src":"./Ground.gltf"}));
bld.attachEntityComponent('3', 'engine.shape', 'gltfShape3');`

export const componentAttributesSample = `
bld.subscribe('sceneStart');

bld.addEntity('1');
bld.setParent('1', '0');
bld.componentCreated('gltfShape', 'engine.shape', 54);
bld.componentUpdated('gltfShape', JSON.stringify({"withCollisions":true,"isPointerBlocker":true,"visible":true,"src":"./Tree.gltf"}));
bld.attachEntityComponent('1', 'engine.shape', 'gltfShape');

bld.addEntity('2');
bld.setParent('2', '0');
bld.componentCreated('gltfShape2', 'engine.shape', 54);
bld.componentUpdated('gltfShape2', JSON.stringify({"withCollisions":false,"isPointerBlocker":true,"visible":true,"src":"./Rock.gltf"}));
bld.attachEntityComponent('2', 'engine.shape', 'gltfShape2');
`
