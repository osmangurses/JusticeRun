var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.JointSpring' )
  var i2253 = data
  i2252.spring = i2253[0]
  i2252.damper = i2253[1]
  i2252.targetPosition = i2253[2]
  return i2252
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.JointMotor' )
  var i2255 = data
  i2254.m_TargetVelocity = i2255[0]
  i2254.m_Force = i2255[1]
  i2254.m_FreeSpin = i2255[2]
  return i2254
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.JointLimits' )
  var i2257 = data
  i2256.m_Min = i2257[0]
  i2256.m_Max = i2257[1]
  i2256.m_Bounciness = i2257[2]
  i2256.m_BounceMinVelocity = i2257[3]
  i2256.m_ContactDistance = i2257[4]
  i2256.minBounce = i2257[5]
  i2256.maxBounce = i2257[6]
  return i2256
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.JointDrive' )
  var i2259 = data
  i2258.m_PositionSpring = i2259[0]
  i2258.m_PositionDamper = i2259[1]
  i2258.m_MaximumForce = i2259[2]
  return i2258
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2261 = data
  i2260.m_Spring = i2261[0]
  i2260.m_Damper = i2261[1]
  return i2260
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2263 = data
  i2262.m_Limit = i2263[0]
  i2262.m_Bounciness = i2263[1]
  i2262.m_ContactDistance = i2263[2]
  return i2262
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2265 = data
  i2264.m_ExtremumSlip = i2265[0]
  i2264.m_ExtremumValue = i2265[1]
  i2264.m_AsymptoteSlip = i2265[2]
  i2264.m_AsymptoteValue = i2265[3]
  i2264.m_Stiffness = i2265[4]
  return i2264
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2267 = data
  i2266.m_LowerAngle = i2267[0]
  i2266.m_UpperAngle = i2267[1]
  return i2266
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2269 = data
  i2268.m_MotorSpeed = i2269[0]
  i2268.m_MaximumMotorTorque = i2269[1]
  return i2268
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2271 = data
  i2270.m_DampingRatio = i2271[0]
  i2270.m_Frequency = i2271[1]
  i2270.m_Angle = i2271[2]
  return i2270
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2273 = data
  i2272.m_LowerTranslation = i2273[0]
  i2272.m_UpperTranslation = i2273[1]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2274 = root || new pc.UnityMaterial()
  var i2275 = data
  i2274.name = i2275[0]
  request.r(i2275[1], i2275[2], 0, i2274, 'shader')
  i2274.renderQueue = i2275[3]
  i2274.enableInstancing = !!i2275[4]
  var i2277 = i2275[5]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2277[i + 0]) );
  }
  i2274.floatParameters = i2276
  var i2279 = i2275[6]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2279[i + 0]) );
  }
  i2274.colorParameters = i2278
  var i2281 = i2275[7]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2281[i + 0]) );
  }
  i2274.vectorParameters = i2280
  var i2283 = i2275[8]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2283[i + 0]) );
  }
  i2274.textureParameters = i2282
  var i2285 = i2275[9]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2285[i + 0]) );
  }
  i2274.materialFlags = i2284
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2289 = data
  i2288.name = i2289[0]
  i2288.value = i2289[1]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2293 = data
  i2292.name = i2293[0]
  i2292.value = new pc.Color(i2293[1], i2293[2], i2293[3], i2293[4])
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2297 = data
  i2296.name = i2297[0]
  i2296.value = new pc.Vec4( i2297[1], i2297[2], i2297[3], i2297[4] )
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2301 = data
  i2300.name = i2301[0]
  request.r(i2301[1], i2301[2], 0, i2300, 'value')
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2305 = data
  i2304.name = i2305[0]
  i2304.enabled = !!i2305[1]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2307 = data
  i2306.name = i2307[0]
  i2306.width = i2307[1]
  i2306.height = i2307[2]
  i2306.mipmapCount = i2307[3]
  i2306.anisoLevel = i2307[4]
  i2306.filterMode = i2307[5]
  i2306.hdr = !!i2307[6]
  i2306.format = i2307[7]
  i2306.wrapMode = i2307[8]
  i2306.alphaIsTransparency = !!i2307[9]
  i2306.alphaSource = i2307[10]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2309 = data
  i2308.position = new pc.Vec3( i2309[0], i2309[1], i2309[2] )
  i2308.scale = new pc.Vec3( i2309[3], i2309[4], i2309[5] )
  i2308.rotation = new pc.Quat(i2309[6], i2309[7], i2309[8], i2309[9])
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2311 = data
  i2310.mass = i2311[0]
  i2310.drag = i2311[1]
  i2310.angularDrag = i2311[2]
  i2310.useGravity = !!i2311[3]
  i2310.isKinematic = !!i2311[4]
  i2310.constraints = i2311[5]
  i2310.maxAngularVelocity = i2311[6]
  i2310.collisionDetectionMode = i2311[7]
  i2310.interpolation = i2311[8]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2313 = data
  i2312.center = new pc.Vec3( i2313[0], i2313[1], i2313[2] )
  i2312.size = new pc.Vec3( i2313[3], i2313[4], i2313[5] )
  i2312.enabled = !!i2313[6]
  i2312.isTrigger = !!i2313[7]
  request.r(i2313[8], i2313[9], 0, i2312, 'material')
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'animatorController')
  request.r(i2315[2], i2315[3], 0, i2314, 'avatar')
  i2314.updateMode = i2315[4]
  i2314.hasTransformHierarchy = !!i2315[5]
  var i2317 = i2315[6]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2314.humanBones = i2316
  i2314.enabled = !!i2315[7]
  return i2314
}

Deserializers["CharacterMove"] = function (request, data, root) {
  var i2320 = root || request.c( 'CharacterMove' )
  var i2321 = data
  i2320.isOver = !!i2321[0]
  i2320.speedUp = i2321[1]
  i2320.startSpeed = i2321[2]
  i2320.flashLightTime = i2321[3]
  request.r(i2321[4], i2321[5], 0, i2320, 'runEffect')
  request.r(i2321[6], i2321[7], 0, i2320, 'dollarCollectEffect')
  request.r(i2321[8], i2321[9], 0, i2320, 'gameManager')
  i2320.shielded = !!i2321[10]
  i2320.boosted = !!i2321[11]
  request.r(i2321[12], i2321[13], 0, i2320, 'totalAmount')
  request.r(i2321[14], i2321[15], 0, i2320, 'collectedMoney')
  request.r(i2321[16], i2321[17], 0, i2320, 'model')
  request.r(i2321[18], i2321[19], 0, i2320, 'patten1')
  request.r(i2321[20], i2321[21], 0, i2320, 'patten2')
  request.r(i2321[22], i2321[23], 0, i2320, 'cameraFollow')
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2323 = data
  i2322.name = i2323[0]
  i2322.tagId = i2323[1]
  i2322.enabled = !!i2323[2]
  i2322.isStatic = !!i2323[3]
  i2322.layer = i2323[4]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2325 = data
  i2324.enabled = !!i2325[0]
  request.r(i2325[1], i2325[2], 0, i2324, 'sharedMaterial')
  var i2327 = i2325[3]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2324.sharedMaterials = i2326
  i2324.receiveShadows = !!i2325[4]
  i2324.shadowCastingMode = i2325[5]
  i2324.sortingLayerID = i2325[6]
  i2324.sortingOrder = i2325[7]
  i2324.lightmapIndex = i2325[8]
  i2324.lightmapSceneIndex = i2325[9]
  i2324.lightmapScaleOffset = new pc.Vec4( i2325[10], i2325[11], i2325[12], i2325[13] )
  i2324.lightProbeUsage = i2325[14]
  i2324.reflectionProbeUsage = i2325[15]
  request.r(i2325[16], i2325[17], 0, i2324, 'sharedMesh')
  var i2329 = i2325[18]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 2, i2328, '')
  }
  i2324.bones = i2328
  i2324.updateWhenOffscreen = !!i2325[19]
  i2324.localBounds = i2325[20]
  request.r(i2325[21], i2325[22], 0, i2324, 'rootBone')
  var i2331 = i2325[23]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2331[i + 0]) );
  }
  i2324.blendShapesWeights = i2330
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2337 = data
  i2336.weight = i2337[0]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2339 = data
  i2338.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2339[0], i2338.main)
  i2338.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2339[1], i2338.colorBySpeed)
  i2338.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2339[2], i2338.colorOverLifetime)
  i2338.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2339[3], i2338.emission)
  i2338.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2339[4], i2338.rotationBySpeed)
  i2338.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2339[5], i2338.rotationOverLifetime)
  i2338.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2339[6], i2338.shape)
  i2338.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2339[7], i2338.sizeBySpeed)
  i2338.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2339[8], i2338.sizeOverLifetime)
  i2338.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2339[9], i2338.textureSheetAnimation)
  i2338.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2339[10], i2338.velocityOverLifetime)
  i2338.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2339[11], i2338.noise)
  i2338.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2339[12], i2338.inheritVelocity)
  i2338.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2339[13], i2338.forceOverLifetime)
  i2338.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2339[14], i2338.limitVelocityOverLifetime)
  i2338.useAutoRandomSeed = !!i2339[15]
  i2338.randomSeed = i2339[16]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2340 = root || new pc.ParticleSystemMain()
  var i2341 = data
  i2340.duration = i2341[0]
  i2340.loop = !!i2341[1]
  i2340.prewarm = !!i2341[2]
  i2340.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[3], i2340.startDelay)
  i2340.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[4], i2340.startLifetime)
  i2340.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[5], i2340.startSpeed)
  i2340.startSize3D = !!i2341[6]
  i2340.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[7], i2340.startSizeX)
  i2340.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[8], i2340.startSizeY)
  i2340.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[9], i2340.startSizeZ)
  i2340.startRotation3D = !!i2341[10]
  i2340.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[11], i2340.startRotationX)
  i2340.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[12], i2340.startRotationY)
  i2340.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[13], i2340.startRotationZ)
  i2340.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2341[14], i2340.startColor)
  i2340.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[15], i2340.gravityModifier)
  i2340.simulationSpace = i2341[16]
  request.r(i2341[17], i2341[18], 0, i2340, 'customSimulationSpace')
  i2340.simulationSpeed = i2341[19]
  i2340.useUnscaledTime = !!i2341[20]
  i2340.scalingMode = i2341[21]
  i2340.playOnAwake = !!i2341[22]
  i2340.maxParticles = i2341[23]
  i2340.emitterVelocityMode = i2341[24]
  i2340.stopAction = i2341[25]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2342 = root || new pc.MinMaxCurve()
  var i2343 = data
  i2342.mode = i2343[0]
  i2342.curveMin = new pc.AnimationCurve( { keys_flow: i2343[1] } )
  i2342.curveMax = new pc.AnimationCurve( { keys_flow: i2343[2] } )
  i2342.curveMultiplier = i2343[3]
  i2342.constantMin = i2343[4]
  i2342.constantMax = i2343[5]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2344 = root || new pc.MinMaxGradient()
  var i2345 = data
  i2344.mode = i2345[0]
  i2344.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2345[1], i2344.gradientMin)
  i2344.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2345[2], i2344.gradientMax)
  i2344.colorMin = new pc.Color(i2345[3], i2345[4], i2345[5], i2345[6])
  i2344.colorMax = new pc.Color(i2345[7], i2345[8], i2345[9], i2345[10])
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2347 = data
  i2346.mode = i2347[0]
  var i2349 = i2347[1]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2349[i + 0]) );
  }
  i2346.colorKeys = i2348
  var i2351 = i2347[2]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2351[i + 0]) );
  }
  i2346.alphaKeys = i2350
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2352 = root || new pc.ParticleSystemColorBySpeed()
  var i2353 = data
  i2352.enabled = !!i2353[0]
  i2352.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2353[1], i2352.color)
  i2352.range = new pc.Vec2( i2353[2], i2353[3] )
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2357 = data
  i2356.color = new pc.Color(i2357[0], i2357[1], i2357[2], i2357[3])
  i2356.time = i2357[4]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2361 = data
  i2360.alpha = i2361[0]
  i2360.time = i2361[1]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2362 = root || new pc.ParticleSystemColorOverLifetime()
  var i2363 = data
  i2362.enabled = !!i2363[0]
  i2362.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2363[1], i2362.color)
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2364 = root || new pc.ParticleSystemEmitter()
  var i2365 = data
  i2364.enabled = !!i2365[0]
  i2364.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2365[1], i2364.rateOverTime)
  i2364.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2365[2], i2364.rateOverDistance)
  var i2367 = i2365[3]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 1) {
    i2366.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2367[i + 0]) );
  }
  i2364.bursts = i2366
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2370 = root || new pc.ParticleSystemBurst()
  var i2371 = data
  i2370.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[0], i2370.count)
  i2370.cycleCount = i2371[1]
  i2370.minCount = i2371[2]
  i2370.maxCount = i2371[3]
  i2370.repeatInterval = i2371[4]
  i2370.time = i2371[5]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2372 = root || new pc.ParticleSystemRotationBySpeed()
  var i2373 = data
  i2372.enabled = !!i2373[0]
  i2372.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2373[1], i2372.x)
  i2372.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2373[2], i2372.y)
  i2372.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2373[3], i2372.z)
  i2372.separateAxes = !!i2373[4]
  i2372.range = new pc.Vec2( i2373[5], i2373[6] )
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2374 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2375 = data
  i2374.enabled = !!i2375[0]
  i2374.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[1], i2374.x)
  i2374.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[2], i2374.y)
  i2374.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2375[3], i2374.z)
  i2374.separateAxes = !!i2375[4]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2376 = root || new pc.ParticleSystemShape()
  var i2377 = data
  i2376.enabled = !!i2377[0]
  i2376.shapeType = i2377[1]
  i2376.randomDirectionAmount = i2377[2]
  i2376.sphericalDirectionAmount = i2377[3]
  i2376.randomPositionAmount = i2377[4]
  i2376.alignToDirection = !!i2377[5]
  i2376.radius = i2377[6]
  i2376.radiusMode = i2377[7]
  i2376.radiusSpread = i2377[8]
  i2376.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[9], i2376.radiusSpeed)
  i2376.radiusThickness = i2377[10]
  i2376.angle = i2377[11]
  i2376.length = i2377[12]
  i2376.boxThickness = new pc.Vec3( i2377[13], i2377[14], i2377[15] )
  i2376.meshShapeType = i2377[16]
  request.r(i2377[17], i2377[18], 0, i2376, 'mesh')
  request.r(i2377[19], i2377[20], 0, i2376, 'meshRenderer')
  request.r(i2377[21], i2377[22], 0, i2376, 'skinnedMeshRenderer')
  i2376.useMeshMaterialIndex = !!i2377[23]
  i2376.meshMaterialIndex = i2377[24]
  i2376.useMeshColors = !!i2377[25]
  i2376.normalOffset = i2377[26]
  i2376.arc = i2377[27]
  i2376.arcMode = i2377[28]
  i2376.arcSpread = i2377[29]
  i2376.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2377[30], i2376.arcSpeed)
  i2376.donutRadius = i2377[31]
  i2376.position = new pc.Vec3( i2377[32], i2377[33], i2377[34] )
  i2376.rotation = new pc.Vec3( i2377[35], i2377[36], i2377[37] )
  i2376.scale = new pc.Vec3( i2377[38], i2377[39], i2377[40] )
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2378 = root || new pc.ParticleSystemSizeBySpeed()
  var i2379 = data
  i2378.enabled = !!i2379[0]
  i2378.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[1], i2378.x)
  i2378.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[2], i2378.y)
  i2378.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2379[3], i2378.z)
  i2378.separateAxes = !!i2379[4]
  i2378.range = new pc.Vec2( i2379[5], i2379[6] )
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2380 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2381 = data
  i2380.enabled = !!i2381[0]
  i2380.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2381[1], i2380.x)
  i2380.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2381[2], i2380.y)
  i2380.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2381[3], i2380.z)
  i2380.separateAxes = !!i2381[4]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2382 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.mode = i2383[1]
  i2382.animation = i2383[2]
  i2382.numTilesX = i2383[3]
  i2382.numTilesY = i2383[4]
  i2382.useRandomRow = !!i2383[5]
  i2382.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[6], i2382.frameOverTime)
  i2382.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2383[7], i2382.startFrame)
  i2382.cycleCount = i2383[8]
  i2382.rowIndex = i2383[9]
  i2382.flipU = i2383[10]
  i2382.flipV = i2383[11]
  i2382.spriteCount = i2383[12]
  var i2385 = i2383[13]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 2) {
  request.r(i2385[i + 0], i2385[i + 1], 2, i2384, '')
  }
  i2382.sprites = i2384
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2388 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2389 = data
  i2388.enabled = !!i2389[0]
  i2388.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[1], i2388.x)
  i2388.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[2], i2388.y)
  i2388.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[3], i2388.z)
  i2388.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[4], i2388.radial)
  i2388.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[5], i2388.speedModifier)
  i2388.space = i2389[6]
  i2388.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[7], i2388.orbitalX)
  i2388.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[8], i2388.orbitalY)
  i2388.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[9], i2388.orbitalZ)
  i2388.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[10], i2388.orbitalOffsetX)
  i2388.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[11], i2388.orbitalOffsetY)
  i2388.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2389[12], i2388.orbitalOffsetZ)
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2390 = root || new pc.ParticleSystemNoise()
  var i2391 = data
  i2390.enabled = !!i2391[0]
  i2390.separateAxes = !!i2391[1]
  i2390.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[2], i2390.strengthX)
  i2390.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[3], i2390.strengthY)
  i2390.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[4], i2390.strengthZ)
  i2390.frequency = i2391[5]
  i2390.damping = !!i2391[6]
  i2390.octaveCount = i2391[7]
  i2390.octaveMultiplier = i2391[8]
  i2390.octaveScale = i2391[9]
  i2390.quality = i2391[10]
  i2390.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[11], i2390.scrollSpeed)
  i2390.scrollSpeedMultiplier = i2391[12]
  i2390.remapEnabled = !!i2391[13]
  i2390.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[14], i2390.remapX)
  i2390.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[15], i2390.remapY)
  i2390.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[16], i2390.remapZ)
  i2390.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[17], i2390.positionAmount)
  i2390.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[18], i2390.rotationAmount)
  i2390.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2391[19], i2390.sizeAmount)
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2392 = root || new pc.ParticleSystemInheritVelocity()
  var i2393 = data
  i2392.enabled = !!i2393[0]
  i2392.mode = i2393[1]
  i2392.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2393[2], i2392.curve)
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2394 = root || new pc.ParticleSystemForceOverLifetime()
  var i2395 = data
  i2394.enabled = !!i2395[0]
  i2394.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[1], i2394.x)
  i2394.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[2], i2394.y)
  i2394.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[3], i2394.z)
  i2394.space = i2395[4]
  i2394.randomized = !!i2395[5]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2396 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2397 = data
  i2396.enabled = !!i2397[0]
  i2396.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[1], i2396.limit)
  i2396.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[2], i2396.limitX)
  i2396.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[3], i2396.limitY)
  i2396.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[4], i2396.limitZ)
  i2396.dampen = i2397[5]
  i2396.separateAxes = !!i2397[6]
  i2396.space = i2397[7]
  i2396.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2397[8], i2396.drag)
  i2396.multiplyDragByParticleSize = !!i2397[9]
  i2396.multiplyDragByParticleVelocity = !!i2397[10]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2399 = data
  i2398.enabled = !!i2399[0]
  request.r(i2399[1], i2399[2], 0, i2398, 'sharedMaterial')
  var i2401 = i2399[3]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 2) {
  request.r(i2401[i + 0], i2401[i + 1], 2, i2400, '')
  }
  i2398.sharedMaterials = i2400
  i2398.receiveShadows = !!i2399[4]
  i2398.shadowCastingMode = i2399[5]
  i2398.sortingLayerID = i2399[6]
  i2398.sortingOrder = i2399[7]
  i2398.lightmapIndex = i2399[8]
  i2398.lightmapSceneIndex = i2399[9]
  i2398.lightmapScaleOffset = new pc.Vec4( i2399[10], i2399[11], i2399[12], i2399[13] )
  i2398.lightProbeUsage = i2399[14]
  i2398.reflectionProbeUsage = i2399[15]
  request.r(i2399[16], i2399[17], 0, i2398, 'mesh')
  i2398.meshCount = i2399[18]
  i2398.activeVertexStreamsCount = i2399[19]
  i2398.alignment = i2399[20]
  i2398.renderMode = i2399[21]
  i2398.sortMode = i2399[22]
  i2398.lengthScale = i2399[23]
  i2398.velocityScale = i2399[24]
  i2398.cameraVelocityScale = i2399[25]
  i2398.normalDirection = i2399[26]
  i2398.sortingFudge = i2399[27]
  i2398.minParticleSize = i2399[28]
  i2398.maxParticleSize = i2399[29]
  i2398.pivot = new pc.Vec3( i2399[30], i2399[31], i2399[32] )
  request.r(i2399[33], i2399[34], 0, i2398, 'trailMaterial')
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'sharedMesh')
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'additionalVertexStreams')
  i2404.enabled = !!i2405[2]
  request.r(i2405[3], i2405[4], 0, i2404, 'sharedMaterial')
  var i2407 = i2405[5]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 2) {
  request.r(i2407[i + 0], i2407[i + 1], 2, i2406, '')
  }
  i2404.sharedMaterials = i2406
  i2404.receiveShadows = !!i2405[6]
  i2404.shadowCastingMode = i2405[7]
  i2404.sortingLayerID = i2405[8]
  i2404.sortingOrder = i2405[9]
  i2404.lightmapIndex = i2405[10]
  i2404.lightmapSceneIndex = i2405[11]
  i2404.lightmapScaleOffset = new pc.Vec4( i2405[12], i2405[13], i2405[14], i2405[15] )
  i2404.lightProbeUsage = i2405[16]
  i2404.reflectionProbeUsage = i2405[17]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2409 = data
  i2408.name = i2409[0]
  i2408.halfPrecision = !!i2409[1]
  i2408.vertexCount = i2409[2]
  i2408.aabb = i2409[3]
  var i2411 = i2409[4]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( !!i2411[i + 0] );
  }
  i2408.streams = i2410
  i2408.vertices = i2409[5]
  var i2413 = i2409[6]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2413[i + 0]) );
  }
  i2408.subMeshes = i2412
  var i2415 = i2409[7]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 16) {
    i2414.push( new pc.Mat4().setData(i2415[i + 0], i2415[i + 1], i2415[i + 2], i2415[i + 3],  i2415[i + 4], i2415[i + 5], i2415[i + 6], i2415[i + 7],  i2415[i + 8], i2415[i + 9], i2415[i + 10], i2415[i + 11],  i2415[i + 12], i2415[i + 13], i2415[i + 14], i2415[i + 15]) );
  }
  i2408.bindposes = i2414
  var i2417 = i2409[8]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2417[i + 0]) );
  }
  i2408.blendShapes = i2416
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2423 = data
  i2422.triangles = i2423[0]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2429 = data
  i2428.name = i2429[0]
  var i2431 = i2429[1]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2431[i + 0]) );
  }
  i2428.frames = i2430
  return i2428
}

Deserializers["Dollars"] = function (request, data, root) {
  var i2432 = root || request.c( 'Dollars' )
  var i2433 = data
  return i2432
}

Deserializers["PlatformCreator"] = function (request, data, root) {
  var i2434 = root || request.c( 'PlatformCreator' )
  var i2435 = data
  var i2437 = i2435[0]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 2, i2436, '')
  }
  i2434.obstacles = i2436
  var i2439 = i2435[1]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 2) {
  request.r(i2439[i + 0], i2439[i + 1], 2, i2438, '')
  }
  i2434.boosters = i2438
  return i2434
}

Deserializers["Obstacle"] = function (request, data, root) {
  var i2442 = root || request.c( 'Obstacle' )
  var i2443 = data
  var i2445 = i2443[0]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 3) {
    i2444.push( new pc.Vec3( i2445[i + 0], i2445[i + 1], i2445[i + 2] ) );
  }
  i2442.positions = i2444
  var i2447 = i2443[1]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 3) {
    i2446.push( new pc.Vec3( i2447[i + 0], i2447[i + 1], i2447[i + 2] ) );
  }
  i2442.rotations = i2446
  return i2442
}

Deserializers["PoliceBarrier"] = function (request, data, root) {
  var i2450 = root || request.c( 'PoliceBarrier' )
  var i2451 = data
  return i2450
}

Deserializers["CarBarrier"] = function (request, data, root) {
  var i2452 = root || request.c( 'CarBarrier' )
  var i2453 = data
  return i2452
}

Deserializers["Duba"] = function (request, data, root) {
  var i2454 = root || request.c( 'Duba' )
  var i2455 = data
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2457 = data
  i2456.name = i2457[0]
  i2456.index = i2457[1]
  i2456.startup = !!i2457[2]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2459 = data
  i2458.pivot = new pc.Vec2( i2459[0], i2459[1] )
  i2458.anchorMin = new pc.Vec2( i2459[2], i2459[3] )
  i2458.anchorMax = new pc.Vec2( i2459[4], i2459[5] )
  i2458.sizeDelta = new pc.Vec2( i2459[6], i2459[7] )
  i2458.anchoredPosition3D = new pc.Vec3( i2459[8], i2459[9], i2459[10] )
  i2458.rotation = new pc.Quat(i2459[11], i2459[12], i2459[13], i2459[14])
  i2458.scale = new pc.Vec3( i2459[15], i2459[16], i2459[17] )
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2461 = data
  i2460.enabled = !!i2461[0]
  i2460.planeDistance = i2461[1]
  i2460.referencePixelsPerUnit = i2461[2]
  i2460.isFallbackOverlay = !!i2461[3]
  i2460.renderMode = i2461[4]
  i2460.renderOrder = i2461[5]
  i2460.sortingLayerName = i2461[6]
  i2460.sortingOrder = i2461[7]
  i2460.scaleFactor = i2461[8]
  request.r(i2461[9], i2461[10], 0, i2460, 'worldCamera')
  i2460.overrideSorting = !!i2461[11]
  i2460.pixelPerfect = !!i2461[12]
  i2460.targetDisplay = i2461[13]
  i2460.overridePixelPerfect = !!i2461[14]
  return i2460
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2462 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2463 = data
  i2462.m_UiScaleMode = i2463[0]
  i2462.m_ReferencePixelsPerUnit = i2463[1]
  i2462.m_ScaleFactor = i2463[2]
  i2462.m_ReferenceResolution = new pc.Vec2( i2463[3], i2463[4] )
  i2462.m_ScreenMatchMode = i2463[5]
  i2462.m_MatchWidthOrHeight = i2463[6]
  i2462.m_PhysicalUnit = i2463[7]
  i2462.m_FallbackScreenDPI = i2463[8]
  i2462.m_DefaultSpriteDPI = i2463[9]
  i2462.m_DynamicPixelsPerUnit = i2463[10]
  i2462.m_PresetInfoIsWorld = !!i2463[11]
  return i2462
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2464 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2465 = data
  i2464.m_IgnoreReversedGraphics = !!i2465[0]
  i2464.m_BlockingObjects = i2465[1]
  i2464.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2465[2] )
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2467 = data
  i2466.cullTransparentMesh = !!i2467[0]
  return i2466
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2468 = root || request.c( 'UnityEngine.UI.Image' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'm_Sprite')
  i2468.m_Type = i2469[2]
  i2468.m_PreserveAspect = !!i2469[3]
  i2468.m_FillCenter = !!i2469[4]
  i2468.m_FillMethod = i2469[5]
  i2468.m_FillAmount = i2469[6]
  i2468.m_FillClockwise = !!i2469[7]
  i2468.m_FillOrigin = i2469[8]
  i2468.m_UseSpriteMesh = !!i2469[9]
  i2468.m_PixelsPerUnitMultiplier = i2469[10]
  request.r(i2469[11], i2469[12], 0, i2468, 'm_Material')
  i2468.m_Maskable = !!i2469[13]
  i2468.m_Color = new pc.Color(i2469[14], i2469[15], i2469[16], i2469[17])
  i2468.m_RaycastTarget = !!i2469[18]
  i2468.m_RaycastPadding = new pc.Vec4( i2469[19], i2469[20], i2469[21], i2469[22] )
  return i2468
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2470 = root || request.c( 'UnityEngine.UI.Text' )
  var i2471 = data
  i2470.m_FontData = request.d('UnityEngine.UI.FontData', i2471[0], i2470.m_FontData)
  i2470.m_Text = i2471[1]
  request.r(i2471[2], i2471[3], 0, i2470, 'm_Material')
  i2470.m_Maskable = !!i2471[4]
  i2470.m_Color = new pc.Color(i2471[5], i2471[6], i2471[7], i2471[8])
  i2470.m_RaycastTarget = !!i2471[9]
  i2470.m_RaycastPadding = new pc.Vec4( i2471[10], i2471[11], i2471[12], i2471[13] )
  return i2470
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2472 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'm_Font')
  i2472.m_FontSize = i2473[2]
  i2472.m_FontStyle = i2473[3]
  i2472.m_BestFit = !!i2473[4]
  i2472.m_MinSize = i2473[5]
  i2472.m_MaxSize = i2473[6]
  i2472.m_Alignment = i2473[7]
  i2472.m_AlignByGeometry = !!i2473[8]
  i2472.m_RichText = !!i2473[9]
  i2472.m_HorizontalOverflow = i2473[10]
  i2472.m_VerticalOverflow = i2473[11]
  i2472.m_LineSpacing = i2473[12]
  return i2472
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2474 = root || request.c( 'UnityEngine.UI.Button' )
  var i2475 = data
  i2474.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2475[0], i2474.m_OnClick)
  i2474.m_Navigation = request.d('UnityEngine.UI.Navigation', i2475[1], i2474.m_Navigation)
  i2474.m_Transition = i2475[2]
  i2474.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2475[3], i2474.m_Colors)
  i2474.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2475[4], i2474.m_SpriteState)
  i2474.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2475[5], i2474.m_AnimationTriggers)
  i2474.m_Interactable = !!i2475[6]
  request.r(i2475[7], i2475[8], 0, i2474, 'm_TargetGraphic')
  return i2474
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2476 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2477 = data
  i2476.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2477[0], i2476.m_PersistentCalls)
  return i2476
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2478 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2479 = data
  var i2481 = i2479[0]
  var i2480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.add(request.d('UnityEngine.Events.PersistentCall', i2481[i + 0]));
  }
  i2478.m_Calls = i2480
  return i2478
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2484 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2485 = data
  request.r(i2485[0], i2485[1], 0, i2484, 'm_Target')
  i2484.m_TargetAssemblyTypeName = i2485[2]
  i2484.m_MethodName = i2485[3]
  i2484.m_Mode = i2485[4]
  i2484.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2485[5], i2484.m_Arguments)
  i2484.m_CallState = i2485[6]
  return i2484
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2486 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'm_ObjectArgument')
  i2486.m_ObjectArgumentAssemblyTypeName = i2487[2]
  i2486.m_IntArgument = i2487[3]
  i2486.m_FloatArgument = i2487[4]
  i2486.m_StringArgument = i2487[5]
  i2486.m_BoolArgument = !!i2487[6]
  return i2486
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2489 = data
  i2488.m_Mode = i2489[0]
  i2488.m_WrapAround = !!i2489[1]
  request.r(i2489[2], i2489[3], 0, i2488, 'm_SelectOnUp')
  request.r(i2489[4], i2489[5], 0, i2488, 'm_SelectOnDown')
  request.r(i2489[6], i2489[7], 0, i2488, 'm_SelectOnLeft')
  request.r(i2489[8], i2489[9], 0, i2488, 'm_SelectOnRight')
  return i2488
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2491 = data
  i2490.m_NormalColor = new pc.Color(i2491[0], i2491[1], i2491[2], i2491[3])
  i2490.m_HighlightedColor = new pc.Color(i2491[4], i2491[5], i2491[6], i2491[7])
  i2490.m_PressedColor = new pc.Color(i2491[8], i2491[9], i2491[10], i2491[11])
  i2490.m_SelectedColor = new pc.Color(i2491[12], i2491[13], i2491[14], i2491[15])
  i2490.m_DisabledColor = new pc.Color(i2491[16], i2491[17], i2491[18], i2491[19])
  i2490.m_ColorMultiplier = i2491[20]
  i2490.m_FadeDuration = i2491[21]
  return i2490
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2492 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'm_HighlightedSprite')
  request.r(i2493[2], i2493[3], 0, i2492, 'm_PressedSprite')
  request.r(i2493[4], i2493[5], 0, i2492, 'm_SelectedSprite')
  request.r(i2493[6], i2493[7], 0, i2492, 'm_DisabledSprite')
  return i2492
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2495 = data
  i2494.m_NormalTrigger = i2495[0]
  i2494.m_HighlightedTrigger = i2495[1]
  i2494.m_PressedTrigger = i2495[2]
  i2494.m_SelectedTrigger = i2495[3]
  i2494.m_DisabledTrigger = i2495[4]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2497 = data
  i2496.enabled = !!i2497[0]
  i2496.aspect = i2497[1]
  i2496.orthographic = !!i2497[2]
  i2496.orthographicSize = i2497[3]
  i2496.backgroundColor = new pc.Color(i2497[4], i2497[5], i2497[6], i2497[7])
  i2496.nearClipPlane = i2497[8]
  i2496.farClipPlane = i2497[9]
  i2496.fieldOfView = i2497[10]
  i2496.depth = i2497[11]
  i2496.clearFlags = i2497[12]
  i2496.cullingMask = i2497[13]
  i2496.rect = i2497[14]
  request.r(i2497[15], i2497[16], 0, i2496, 'targetTexture')
  i2496.usePhysicalProperties = !!i2497[17]
  i2496.focalLength = i2497[18]
  i2496.sensorSize = new pc.Vec2( i2497[19], i2497[20] )
  i2496.lensShift = new pc.Vec2( i2497[21], i2497[22] )
  i2496.gateFit = i2497[23]
  return i2496
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i2498 = root || request.c( 'CameraFollow' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'target')
  i2498.distance = i2499[2]
  i2498.height = i2499[3]
  i2498.smoothSpeed = i2499[4]
  i2498.offset = new pc.Vec3( i2499[5], i2499[6], i2499[7] )
  i2498.isOver = !!i2499[8]
  i2498.gecenZaman = i2499[9]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2501 = data
  i2500.enabled = !!i2501[0]
  i2500.type = i2501[1]
  i2500.color = new pc.Color(i2501[2], i2501[3], i2501[4], i2501[5])
  i2500.cullingMask = i2501[6]
  i2500.intensity = i2501[7]
  i2500.range = i2501[8]
  i2500.spotAngle = i2501[9]
  i2500.shadows = i2501[10]
  i2500.shadowNormalBias = i2501[11]
  i2500.shadowBias = i2501[12]
  i2500.shadowStrength = i2501[13]
  i2500.shadowResolution = i2501[14]
  i2500.lightmapBakeType = i2501[15]
  i2500.renderMode = i2501[16]
  request.r(i2501[17], i2501[18], 0, i2500, 'cookie')
  i2500.cookieSize = i2501[19]
  return i2500
}

Deserializers["GameManager"] = function (request, data, root) {
  var i2502 = root || request.c( 'GameManager' )
  var i2503 = data
  request.r(i2503[0], i2503[1], 0, i2502, 'nextThief')
  request.r(i2503[2], i2503[3], 0, i2502, 'policeman')
  request.r(i2503[4], i2503[5], 0, i2502, 'road')
  request.r(i2503[6], i2503[7], 0, i2502, 'failPanel')
  request.r(i2503[8], i2503[9], 0, i2502, 'nextMapPanel')
  request.r(i2503[10], i2503[11], 0, i2502, 'soundsParent')
  request.r(i2503[12], i2503[13], 0, i2502, 'energy')
  request.r(i2503[14], i2503[15], 0, i2502, 'backGround')
  i2502.roadPos = new pc.Vec3( i2503[16], i2503[17], i2503[18] )
  i2502.lastObjectRotation = i2503[19]
  i2502.levelOfAll = i2503[20]
  i2502.thiefCount = i2503[21]
  i2502.collectedMoney = i2503[22]
  i2502.energyLevel = i2503[23]
  i2502.energyDownSpeed = i2503[24]
  i2502.timeToAnons = i2503[25]
  var i2505 = i2503[26]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 2) {
  request.r(i2505[i + 0], i2505[i + 1], 2, i2504, '')
  }
  i2502.AllThiefs = i2504
  request.r(i2503[27], i2503[28], 0, i2502, 'nextThiefText')
  request.r(i2503[29], i2503[30], 0, i2502, 'leastThiefCount')
  request.r(i2503[31], i2503[32], 0, i2502, 'anonsSound')
  request.r(i2503[33], i2503[34], 0, i2502, 'collectMoneySound')
  request.r(i2503[35], i2503[36], 0, i2502, 'eatSound')
  request.r(i2503[37], i2503[38], 0, i2502, 'hitSound')
  request.r(i2503[39], i2503[40], 0, i2502, 'homurdanmaSound')
  request.r(i2503[41], i2503[42], 0, i2502, 'drinkSound')
  request.r(i2503[43], i2503[44], 0, i2502, 'turnPlatformSound')
  request.r(i2503[45], i2503[46], 0, i2502, 'dalFirlatmaSound')
  request.r(i2503[47], i2503[48], 0, i2502, 'patenVagonSound')
  request.r(i2503[49], i2503[50], 0, i2502, 'portalSound')
  request.r(i2503[51], i2503[52], 0, i2502, 'trenKornaSound')
  request.r(i2503[53], i2503[54], 0, i2502, 'yagKaymaSound')
  request.r(i2503[55], i2503[56], 0, i2502, 'playerCharacterMove')
  i2502.anyBoosterInScene = !!i2503[57]
  return i2502
}

Deserializers["TurnPlatform"] = function (request, data, root) {
  var i2506 = root || request.c( 'TurnPlatform' )
  var i2507 = data
  i2506.swipeThreshold = i2507[0]
  i2506.isTurning = !!i2507[1]
  i2506.clickable = !!i2507[2]
  request.r(i2507[3], i2507[4], 0, i2506, 'gameManager')
  request.r(i2507[5], i2507[6], 0, i2506, 'playerCharacterMove')
  return i2506
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2509 = data
  request.r(i2509[0], i2509[1], 0, i2508, 'm_FirstSelected')
  i2508.m_sendNavigationEvents = !!i2509[2]
  i2508.m_DragThreshold = i2509[3]
  return i2508
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2510 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2511 = data
  i2510.m_HorizontalAxis = i2511[0]
  i2510.m_VerticalAxis = i2511[1]
  i2510.m_SubmitButton = i2511[2]
  i2510.m_CancelButton = i2511[3]
  i2510.m_InputActionsPerSecond = i2511[4]
  i2510.m_RepeatDelay = i2511[5]
  i2510.m_ForceModuleActive = !!i2511[6]
  i2510.m_SendPointerHoverToParent = !!i2511[7]
  return i2510
}

Deserializers["Thief"] = function (request, data, root) {
  var i2512 = root || request.c( 'Thief' )
  var i2513 = data
  i2512.isDeath = !!i2513[0]
  i2512.startSpeed = i2513[1]
  request.r(i2513[2], i2513[3], 0, i2512, 'moneyBudget')
  request.r(i2513[4], i2513[5], 0, i2512, 'dollar')
  i2512.moneyInBag = i2513[6]
  return i2512
}

Deserializers["ThiefObstacleDetect"] = function (request, data, root) {
  var i2514 = root || request.c( 'ThiefObstacleDetect' )
  var i2515 = data
  var i2517 = i2515[0]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 3) {
    i2516.push( new pc.Vec3( i2517[i + 0], i2517[i + 1], i2517[i + 2] ) );
  }
  i2514.thiefPositions = i2516
  i2514.thiefJumpPower = i2515[1]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2519 = data
  request.r(i2519[0], i2519[1], 0, i2518, 'clip')
  request.r(i2519[2], i2519[3], 0, i2518, 'outputAudioMixerGroup')
  i2518.playOnAwake = !!i2519[4]
  i2518.loop = !!i2519[5]
  i2518.time = i2519[6]
  i2518.volume = i2519[7]
  i2518.pitch = i2519[8]
  i2518.enabled = !!i2519[9]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2521 = data
  i2520.ambientIntensity = i2521[0]
  i2520.reflectionIntensity = i2521[1]
  i2520.ambientMode = i2521[2]
  i2520.ambientLight = new pc.Color(i2521[3], i2521[4], i2521[5], i2521[6])
  i2520.ambientSkyColor = new pc.Color(i2521[7], i2521[8], i2521[9], i2521[10])
  i2520.ambientGroundColor = new pc.Color(i2521[11], i2521[12], i2521[13], i2521[14])
  i2520.ambientEquatorColor = new pc.Color(i2521[15], i2521[16], i2521[17], i2521[18])
  i2520.fogColor = new pc.Color(i2521[19], i2521[20], i2521[21], i2521[22])
  i2520.fogEndDistance = i2521[23]
  i2520.fogStartDistance = i2521[24]
  i2520.fogDensity = i2521[25]
  i2520.fog = !!i2521[26]
  request.r(i2521[27], i2521[28], 0, i2520, 'skybox')
  i2520.fogMode = i2521[29]
  var i2523 = i2521[30]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2523[i + 0]) );
  }
  i2520.lightmaps = i2522
  i2520.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2521[31], i2520.lightProbes)
  i2520.lightmapsMode = i2521[32]
  i2520.mixedBakeMode = i2521[33]
  i2520.environmentLightingMode = i2521[34]
  i2520.ambientProbe = new pc.SphericalHarmonicsL2(i2521[35])
  i2520.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2521[36])
  i2520.useReferenceAmbientProbe = !!i2521[37]
  request.r(i2521[38], i2521[39], 0, i2520, 'customReflection')
  request.r(i2521[40], i2521[41], 0, i2520, 'defaultReflection')
  i2520.defaultReflectionMode = i2521[42]
  i2520.defaultReflectionResolution = i2521[43]
  i2520.sunLightObjectId = i2521[44]
  i2520.pixelLightCount = i2521[45]
  i2520.defaultReflectionHDR = !!i2521[46]
  i2520.hasLightDataAsset = !!i2521[47]
  i2520.hasManualGenerate = !!i2521[48]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2527 = data
  request.r(i2527[0], i2527[1], 0, i2526, 'lightmapColor')
  request.r(i2527[2], i2527[3], 0, i2526, 'lightmapDirection')
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2528 = root || new UnityEngine.LightProbes()
  var i2529 = data
  return i2528
}

Deserializers["DesertNonMovedObstacles"] = function (request, data, root) {
  var i2534 = root || request.c( 'DesertNonMovedObstacles' )
  var i2535 = data
  return i2534
}

Deserializers["Candy"] = function (request, data, root) {
  var i2536 = root || request.c( 'Candy' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'particle')
  i2536.iscollected = !!i2537[2]
  i2536.speed = i2537[3]
  i2536.rotateSpeed = i2537[4]
  return i2536
}

Deserializers["CopObstacle"] = function (request, data, root) {
  var i2538 = root || request.c( 'CopObstacle' )
  var i2539 = data
  return i2538
}

Deserializers["DalScript"] = function (request, data, root) {
  var i2540 = root || request.c( 'DalScript' )
  var i2541 = data
  i2540.speed = i2541[0]
  i2540.rotateSpeed = i2541[1]
  i2540.iscollected = !!i2541[2]
  request.r(i2541[3], i2541[4], 0, i2540, 'collectableLight')
  return i2540
}

Deserializers["MovedTrain"] = function (request, data, root) {
  var i2542 = root || request.c( 'MovedTrain' )
  var i2543 = data
  return i2542
}

Deserializers["Portal"] = function (request, data, root) {
  var i2544 = root || request.c( 'Portal' )
  var i2545 = data
  request.r(i2545[0], i2545[1], 0, i2544, 'gameManager')
  request.r(i2545[2], i2545[3], 0, i2544, 'endlessManager')
  request.r(i2545[4], i2545[5], 0, i2544, 'policeman')
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2547 = data
  i2546.enabled = !!i2547[0]
  i2546.isTrigger = !!i2547[1]
  request.r(i2547[2], i2547[3], 0, i2546, 'material')
  request.r(i2547[4], i2547[5], 0, i2546, 'sharedMesh')
  i2546.convex = !!i2547[6]
  return i2546
}

Deserializers["TahteravalliObstacle"] = function (request, data, root) {
  var i2548 = root || request.c( 'TahteravalliObstacle' )
  var i2549 = data
  return i2548
}

Deserializers["TreeObstacle"] = function (request, data, root) {
  var i2550 = root || request.c( 'TreeObstacle' )
  var i2551 = data
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2553 = data
  i2552.name = i2553[0]
  i2552.bounciness = i2553[1]
  i2552.dynamicFriction = i2553[2]
  i2552.staticFriction = i2553[3]
  i2552.frictionCombine = i2553[4]
  i2552.bounceCombine = i2553[5]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2555 = data
  var i2557 = i2555[0]
  var i2556 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2557[i + 0]));
  }
  i2554.ShaderCompilationErrors = i2556
  i2554.name = i2555[1]
  i2554.guid = i2555[2]
  var i2559 = i2555[3]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( i2559[i + 0] );
  }
  i2554.shaderDefinedKeywords = i2558
  var i2561 = i2555[4]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2561[i + 0]) );
  }
  i2554.passes = i2560
  var i2563 = i2555[5]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2563[i + 0]) );
  }
  i2554.usePasses = i2562
  var i2565 = i2555[6]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2565[i + 0]) );
  }
  i2554.defaultParameterValues = i2564
  request.r(i2555[7], i2555[8], 0, i2554, 'unityFallbackShader')
  i2554.readDepth = !!i2555[9]
  i2554.isCreatedByShaderGraph = !!i2555[10]
  i2554.usedBatchUniforms = i2555[11]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2569 = data
  i2568.shaderName = i2569[0]
  i2568.errorMessage = i2569[1]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2574 = root || new pc.UnityShaderPass()
  var i2575 = data
  i2574.id = i2575[0]
  i2574.subShaderIndex = i2575[1]
  i2574.name = i2575[2]
  i2574.passType = i2575[3]
  i2574.grabPassTextureName = i2575[4]
  i2574.usePass = !!i2575[5]
  i2574.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[6], i2574.zTest)
  i2574.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[7], i2574.zWrite)
  i2574.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[8], i2574.culling)
  i2574.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2575[9], i2574.blending)
  i2574.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2575[10], i2574.alphaBlending)
  i2574.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[11], i2574.colorWriteMask)
  i2574.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[12], i2574.offsetUnits)
  i2574.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[13], i2574.offsetFactor)
  i2574.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[14], i2574.stencilRef)
  i2574.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[15], i2574.stencilReadMask)
  i2574.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2575[16], i2574.stencilWriteMask)
  i2574.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2575[17], i2574.stencilOp)
  i2574.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2575[18], i2574.stencilOpFront)
  i2574.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2575[19], i2574.stencilOpBack)
  var i2577 = i2575[20]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2577[i + 0]) );
  }
  i2574.tags = i2576
  var i2579 = i2575[21]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( i2579[i + 0] );
  }
  i2574.passDefinedKeywords = i2578
  var i2581 = i2575[22]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2581[i + 0]) );
  }
  i2574.passDefinedKeywordGroups = i2580
  var i2583 = i2575[23]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2583[i + 0]) );
  }
  i2574.variants = i2582
  var i2585 = i2575[24]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2585[i + 0]) );
  }
  i2574.excludedVariants = i2584
  i2574.hasDepthReader = !!i2575[25]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2587 = data
  i2586.val = i2587[0]
  i2586.name = i2587[1]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2589 = data
  i2588.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[0], i2588.src)
  i2588.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[1], i2588.dst)
  i2588.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2589[2], i2588.op)
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2591 = data
  i2590.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2591[0], i2590.pass)
  i2590.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2591[1], i2590.fail)
  i2590.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2591[2], i2590.zFail)
  i2590.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2591[3], i2590.comp)
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2595 = data
  i2594.name = i2595[0]
  i2594.value = i2595[1]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2599 = data
  var i2601 = i2599[0]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( i2601[i + 0] );
  }
  i2598.keywords = i2600
  i2598.hasDiscard = !!i2599[1]
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2605 = data
  i2604.passId = i2605[0]
  i2604.subShaderIndex = i2605[1]
  var i2607 = i2605[2]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( i2607[i + 0] );
  }
  i2604.keywords = i2606
  i2604.vertexProgram = i2605[3]
  i2604.fragmentProgram = i2605[4]
  i2604.readDepth = !!i2605[5]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2611 = data
  request.r(i2611[0], i2611[1], 0, i2610, 'shader')
  i2610.pass = i2611[2]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2615 = data
  i2614.name = i2615[0]
  i2614.type = i2615[1]
  i2614.value = new pc.Vec4( i2615[2], i2615[3], i2615[4], i2615[5] )
  i2614.textureValue = i2615[6]
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2617 = data
  i2616.name = i2617[0]
  request.r(i2617[1], i2617[2], 0, i2616, 'texture')
  i2616.aabb = i2617[3]
  i2616.vertices = i2617[4]
  i2616.triangles = i2617[5]
  i2616.textureRect = UnityEngine.Rect.MinMaxRect(i2617[6], i2617[7], i2617[8], i2617[9])
  i2616.packedRect = UnityEngine.Rect.MinMaxRect(i2617[10], i2617[11], i2617[12], i2617[13])
  i2616.border = new pc.Vec4( i2617[14], i2617[15], i2617[16], i2617[17] )
  i2616.transparency = i2617[18]
  i2616.bounds = i2617[19]
  i2616.pixelsPerUnit = i2617[20]
  i2616.textureWidth = i2617[21]
  i2616.textureHeight = i2617[22]
  i2616.nativeSize = new pc.Vec2( i2617[23], i2617[24] )
  i2616.pivot = new pc.Vec2( i2617[25], i2617[26] )
  i2616.textureRectOffset = new pc.Vec2( i2617[27], i2617[28] )
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2619 = data
  i2618.name = i2619[0]
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2621 = data
  i2620.name = i2621[0]
  i2620.wrapMode = i2621[1]
  i2620.isLooping = !!i2621[2]
  i2620.length = i2621[3]
  var i2623 = i2621[4]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2623[i + 0]) );
  }
  i2620.curves = i2622
  var i2625 = i2621[5]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2625[i + 0]) );
  }
  i2620.events = i2624
  i2620.halfPrecision = !!i2621[6]
  i2620.frameRate = i2621[7]
  i2620.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2621[8], i2620.localBounds)
  i2620.hasMuscleCurves = !!i2621[9]
  var i2627 = i2621[10]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( i2627[i + 0] );
  }
  i2620.clipMuscleConstant = i2626
  i2620.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2621[11], i2620.clipBindingConstant)
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2631 = data
  i2630.path = i2631[0]
  i2630.componentType = i2631[1]
  i2630.property = i2631[2]
  i2630.keys = i2631[3]
  var i2633 = i2631[4]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2633[i + 0]) );
  }
  i2630.objectReferenceKeys = i2632
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2637 = data
  i2636.time = i2637[0]
  request.r(i2637[1], i2637[2], 0, i2636, 'value')
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2641 = data
  i2640.functionName = i2641[0]
  i2640.floatParameter = i2641[1]
  i2640.intParameter = i2641[2]
  i2640.stringParameter = i2641[3]
  request.r(i2641[4], i2641[5], 0, i2640, 'objectReferenceParameter')
  i2640.time = i2641[6]
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2643 = data
  i2642.center = new pc.Vec3( i2643[0], i2643[1], i2643[2] )
  i2642.extends = new pc.Vec3( i2643[3], i2643[4], i2643[5] )
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2647 = data
  var i2649 = i2647[0]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( i2649[i + 0] );
  }
  i2646.genericBindings = i2648
  var i2651 = i2647[1]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.push( i2651[i + 0] );
  }
  i2646.pptrCurveMapping = i2650
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2653 = data
  i2652.name = i2653[0]
  i2652.ascent = i2653[1]
  i2652.originalLineHeight = i2653[2]
  i2652.fontSize = i2653[3]
  var i2655 = i2653[4]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2655[i + 0]) );
  }
  i2652.characterInfo = i2654
  request.r(i2653[5], i2653[6], 0, i2652, 'texture')
  i2652.originalFontSize = i2653[7]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2659 = data
  i2658.index = i2659[0]
  i2658.advance = i2659[1]
  i2658.bearing = i2659[2]
  i2658.glyphWidth = i2659[3]
  i2658.glyphHeight = i2659[4]
  i2658.minX = i2659[5]
  i2658.maxX = i2659[6]
  i2658.minY = i2659[7]
  i2658.maxY = i2659[8]
  i2658.uvBottomLeftX = i2659[9]
  i2658.uvBottomLeftY = i2659[10]
  i2658.uvBottomRightX = i2659[11]
  i2658.uvBottomRightY = i2659[12]
  i2658.uvTopLeftX = i2659[13]
  i2658.uvTopLeftY = i2659[14]
  i2658.uvTopRightX = i2659[15]
  i2658.uvTopRightY = i2659[16]
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2661 = data
  i2660.name = i2661[0]
  var i2663 = i2661[1]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2663[i + 0]) );
  }
  i2660.states = i2662
  var i2665 = i2661[2]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2665[i + 0]) );
  }
  i2660.layers = i2664
  var i2667 = i2661[3]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2667[i + 0]) );
  }
  i2660.parameters = i2666
  i2660.animationClips = i2661[4]
  i2660.HasSubStateMachines = !!i2661[5]
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2671 = data
  i2670.cycleOffset = i2671[0]
  i2670.cycleOffsetParameter = i2671[1]
  i2670.cycleOffsetParameterActive = !!i2671[2]
  i2670.mirror = !!i2671[3]
  i2670.mirrorParameter = i2671[4]
  i2670.mirrorParameterActive = !!i2671[5]
  i2670.motionId = i2671[6]
  i2670.nameHash = i2671[7]
  i2670.fullPathHash = i2671[8]
  i2670.speed = i2671[9]
  i2670.speedParameter = i2671[10]
  i2670.speedParameterActive = !!i2671[11]
  i2670.tag = i2671[12]
  i2670.name = i2671[13]
  i2670.layer = i2671[14]
  i2670.writeDefaultValues = !!i2671[15]
  var i2673 = i2671[16]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2673[i + 0]) );
  }
  i2670.transitions = i2672
  var i2675 = i2671[17]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 2) {
  request.r(i2675[i + 0], i2675[i + 1], 2, i2674, '')
  }
  i2670.behaviours = i2674
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2679 = data
  i2678.fullPath = i2679[0]
  i2678.canTransitionToSelf = !!i2679[1]
  i2678.duration = i2679[2]
  i2678.exitTime = i2679[3]
  i2678.hasExitTime = !!i2679[4]
  i2678.hasFixedDuration = !!i2679[5]
  i2678.interruptionSource = i2679[6]
  i2678.offset = i2679[7]
  i2678.orderedInterruption = !!i2679[8]
  i2678.destinationStateNameHash = i2679[9]
  i2678.destinationStateMachineId = i2679[10]
  i2678.isExit = !!i2679[11]
  i2678.mute = !!i2679[12]
  i2678.solo = !!i2679[13]
  var i2681 = i2679[14]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2681[i + 0]) );
  }
  i2678.conditions = i2680
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2685 = data
  i2684.mode = i2685[0]
  i2684.parameter = i2685[1]
  i2684.threshold = i2685[2]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2691 = data
  i2690.blendingMode = i2691[0]
  i2690.defaultWeight = i2691[1]
  i2690.name = i2691[2]
  i2690.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2691[3], i2690.stateMachine)
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2693 = data
  i2692.id = i2693[0]
  i2692.defaultStateNameHash = i2693[1]
  var i2695 = i2693[2]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2695[i + 0]) );
  }
  i2692.entryTransitions = i2694
  var i2697 = i2693[3]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2697[i + 0]) );
  }
  i2692.anyStateTransitions = i2696
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2701 = data
  i2700.destinationStateNameHash = i2701[0]
  i2700.destinationStateMachineId = i2701[1]
  i2700.isExit = !!i2701[2]
  i2700.mute = !!i2701[3]
  i2700.solo = !!i2701[4]
  var i2703 = i2701[5]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2703[i + 0]) );
  }
  i2700.conditions = i2702
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2707 = data
  i2706.defaultBool = !!i2707[0]
  i2706.defaultFloat = i2707[1]
  i2706.defaultInt = i2707[2]
  i2706.name = i2707[3]
  i2706.nameHash = i2707[4]
  i2706.type = i2707[5]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2709 = data
  i2708.name = i2709[0]
  i2708.bytes64 = i2709[1]
  i2708.data = i2709[2]
  return i2708
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2710 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2711 = data
  i2710.useSafeMode = !!i2711[0]
  i2710.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2711[1], i2710.safeModeOptions)
  i2710.timeScale = i2711[2]
  i2710.unscaledTimeScale = i2711[3]
  i2710.useSmoothDeltaTime = !!i2711[4]
  i2710.maxSmoothUnscaledTime = i2711[5]
  i2710.rewindCallbackMode = i2711[6]
  i2710.showUnityEditorReport = !!i2711[7]
  i2710.logBehaviour = i2711[8]
  i2710.drawGizmos = !!i2711[9]
  i2710.defaultRecyclable = !!i2711[10]
  i2710.defaultAutoPlay = i2711[11]
  i2710.defaultUpdateType = i2711[12]
  i2710.defaultTimeScaleIndependent = !!i2711[13]
  i2710.defaultEaseType = i2711[14]
  i2710.defaultEaseOvershootOrAmplitude = i2711[15]
  i2710.defaultEasePeriod = i2711[16]
  i2710.defaultAutoKill = !!i2711[17]
  i2710.defaultLoopType = i2711[18]
  i2710.debugMode = !!i2711[19]
  i2710.debugStoreTargetId = !!i2711[20]
  i2710.showPreviewPanel = !!i2711[21]
  i2710.storeSettingsLocation = i2711[22]
  i2710.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2711[23], i2710.modules)
  i2710.createASMDEF = !!i2711[24]
  i2710.showPlayingTweens = !!i2711[25]
  i2710.showPausedTweens = !!i2711[26]
  return i2710
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2712 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2713 = data
  i2712.logBehaviour = i2713[0]
  i2712.nestedTweenFailureBehaviour = i2713[1]
  return i2712
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2714 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2715 = data
  i2714.showPanel = !!i2715[0]
  i2714.audioEnabled = !!i2715[1]
  i2714.physicsEnabled = !!i2715[2]
  i2714.physics2DEnabled = !!i2715[3]
  i2714.spriteEnabled = !!i2715[4]
  i2714.uiEnabled = !!i2715[5]
  i2714.textMeshProEnabled = !!i2715[6]
  i2714.tk2DEnabled = !!i2715[7]
  i2714.deAudioEnabled = !!i2715[8]
  i2714.deUnityExtendedEnabled = !!i2715[9]
  i2714.epoOutlineEnabled = !!i2715[10]
  return i2714
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.TMP_Settings' )
  var i2717 = data
  i2716.m_enableWordWrapping = !!i2717[0]
  i2716.m_enableKerning = !!i2717[1]
  i2716.m_enableExtraPadding = !!i2717[2]
  i2716.m_enableTintAllSprites = !!i2717[3]
  i2716.m_enableParseEscapeCharacters = !!i2717[4]
  i2716.m_EnableRaycastTarget = !!i2717[5]
  i2716.m_GetFontFeaturesAtRuntime = !!i2717[6]
  i2716.m_missingGlyphCharacter = i2717[7]
  i2716.m_warningsDisabled = !!i2717[8]
  request.r(i2717[9], i2717[10], 0, i2716, 'm_defaultFontAsset')
  i2716.m_defaultFontAssetPath = i2717[11]
  i2716.m_defaultFontSize = i2717[12]
  i2716.m_defaultAutoSizeMinRatio = i2717[13]
  i2716.m_defaultAutoSizeMaxRatio = i2717[14]
  i2716.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2717[15], i2717[16] )
  i2716.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2717[17], i2717[18] )
  i2716.m_autoSizeTextContainer = !!i2717[19]
  i2716.m_IsTextObjectScaleStatic = !!i2717[20]
  var i2719 = i2717[21]
  var i2718 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2719.length; i += 2) {
  request.r(i2719[i + 0], i2719[i + 1], 1, i2718, '')
  }
  i2716.m_fallbackFontAssets = i2718
  i2716.m_matchMaterialPreset = !!i2717[22]
  request.r(i2717[23], i2717[24], 0, i2716, 'm_defaultSpriteAsset')
  i2716.m_defaultSpriteAssetPath = i2717[25]
  i2716.m_enableEmojiSupport = !!i2717[26]
  i2716.m_MissingCharacterSpriteUnicode = i2717[27]
  i2716.m_defaultColorGradientPresetsPath = i2717[28]
  request.r(i2717[29], i2717[30], 0, i2716, 'm_defaultStyleSheet')
  i2716.m_StyleSheetsResourcePath = i2717[31]
  request.r(i2717[32], i2717[33], 0, i2716, 'm_leadingCharacters')
  request.r(i2717[34], i2717[35], 0, i2716, 'm_followingCharacters')
  i2716.m_UseModernHangulLineBreakingRules = !!i2717[36]
  return i2716
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2722 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2723 = data
  i2722.hashCode = i2723[0]
  request.r(i2723[1], i2723[2], 0, i2722, 'material')
  i2722.materialHashCode = i2723[3]
  request.r(i2723[4], i2723[5], 0, i2722, 'atlas')
  i2722.normalStyle = i2723[6]
  i2722.normalSpacingOffset = i2723[7]
  i2722.boldStyle = i2723[8]
  i2722.boldSpacing = i2723[9]
  i2722.italicStyle = i2723[10]
  i2722.tabSize = i2723[11]
  i2722.m_Version = i2723[12]
  i2722.m_SourceFontFileGUID = i2723[13]
  request.r(i2723[14], i2723[15], 0, i2722, 'm_SourceFontFile_EditorRef')
  request.r(i2723[16], i2723[17], 0, i2722, 'm_SourceFontFile')
  i2722.m_AtlasPopulationMode = i2723[18]
  i2722.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2723[19], i2722.m_FaceInfo)
  var i2725 = i2723[20]
  var i2724 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.add(request.d('UnityEngine.TextCore.Glyph', i2725[i + 0]));
  }
  i2722.m_GlyphTable = i2724
  var i2727 = i2723[21]
  var i2726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.add(request.d('TMPro.TMP_Character', i2727[i + 0]));
  }
  i2722.m_CharacterTable = i2726
  var i2729 = i2723[22]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 2) {
  request.r(i2729[i + 0], i2729[i + 1], 2, i2728, '')
  }
  i2722.m_AtlasTextures = i2728
  i2722.m_AtlasTextureIndex = i2723[23]
  i2722.m_IsMultiAtlasTexturesEnabled = !!i2723[24]
  i2722.m_ClearDynamicDataOnBuild = !!i2723[25]
  var i2731 = i2723[26]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.add(request.d('UnityEngine.TextCore.GlyphRect', i2731[i + 0]));
  }
  i2722.m_UsedGlyphRects = i2730
  var i2733 = i2723[27]
  var i2732 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.add(request.d('UnityEngine.TextCore.GlyphRect', i2733[i + 0]));
  }
  i2722.m_FreeGlyphRects = i2732
  i2722.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2723[28], i2722.m_fontInfo)
  i2722.m_AtlasWidth = i2723[29]
  i2722.m_AtlasHeight = i2723[30]
  i2722.m_AtlasPadding = i2723[31]
  i2722.m_AtlasRenderMode = i2723[32]
  var i2735 = i2723[33]
  var i2734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.add(request.d('TMPro.TMP_Glyph', i2735[i + 0]));
  }
  i2722.m_glyphInfoList = i2734
  i2722.m_KerningTable = request.d('TMPro.KerningTable', i2723[34], i2722.m_KerningTable)
  i2722.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2723[35], i2722.m_FontFeatureTable)
  var i2737 = i2723[36]
  var i2736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2737.length; i += 2) {
  request.r(i2737[i + 0], i2737[i + 1], 1, i2736, '')
  }
  i2722.fallbackFontAssets = i2736
  var i2739 = i2723[37]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2739.length; i += 2) {
  request.r(i2739[i + 0], i2739[i + 1], 1, i2738, '')
  }
  i2722.m_FallbackFontAssetTable = i2738
  i2722.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2723[38], i2722.m_CreationSettings)
  var i2741 = i2723[39]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('TMPro.TMP_FontWeightPair', i2741[i + 0]) );
  }
  i2722.m_FontWeightTable = i2740
  var i2743 = i2723[40]
  var i2742 = []
  for(var i = 0; i < i2743.length; i += 1) {
    i2742.push( request.d('TMPro.TMP_FontWeightPair', i2743[i + 0]) );
  }
  i2722.fontWeights = i2742
  return i2722
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2744 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2745 = data
  i2744.m_FaceIndex = i2745[0]
  i2744.m_FamilyName = i2745[1]
  i2744.m_StyleName = i2745[2]
  i2744.m_PointSize = i2745[3]
  i2744.m_Scale = i2745[4]
  i2744.m_UnitsPerEM = i2745[5]
  i2744.m_LineHeight = i2745[6]
  i2744.m_AscentLine = i2745[7]
  i2744.m_CapLine = i2745[8]
  i2744.m_MeanLine = i2745[9]
  i2744.m_Baseline = i2745[10]
  i2744.m_DescentLine = i2745[11]
  i2744.m_SuperscriptOffset = i2745[12]
  i2744.m_SuperscriptSize = i2745[13]
  i2744.m_SubscriptOffset = i2745[14]
  i2744.m_SubscriptSize = i2745[15]
  i2744.m_UnderlineOffset = i2745[16]
  i2744.m_UnderlineThickness = i2745[17]
  i2744.m_StrikethroughOffset = i2745[18]
  i2744.m_StrikethroughThickness = i2745[19]
  i2744.m_TabWidth = i2745[20]
  return i2744
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2748 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2749 = data
  i2748.m_Index = i2749[0]
  i2748.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2749[1], i2748.m_Metrics)
  i2748.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2749[2], i2748.m_GlyphRect)
  i2748.m_Scale = i2749[3]
  i2748.m_AtlasIndex = i2749[4]
  i2748.m_ClassDefinitionType = i2749[5]
  return i2748
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2750 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2751 = data
  i2750.m_Width = i2751[0]
  i2750.m_Height = i2751[1]
  i2750.m_HorizontalBearingX = i2751[2]
  i2750.m_HorizontalBearingY = i2751[3]
  i2750.m_HorizontalAdvance = i2751[4]
  return i2750
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2752 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2753 = data
  i2752.m_X = i2753[0]
  i2752.m_Y = i2753[1]
  i2752.m_Width = i2753[2]
  i2752.m_Height = i2753[3]
  return i2752
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.TMP_Character' )
  var i2757 = data
  i2756.m_ElementType = i2757[0]
  i2756.m_Unicode = i2757[1]
  i2756.m_GlyphIndex = i2757[2]
  i2756.m_Scale = i2757[3]
  return i2756
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2762 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2763 = data
  i2762.Name = i2763[0]
  i2762.PointSize = i2763[1]
  i2762.Scale = i2763[2]
  i2762.CharacterCount = i2763[3]
  i2762.LineHeight = i2763[4]
  i2762.Baseline = i2763[5]
  i2762.Ascender = i2763[6]
  i2762.CapHeight = i2763[7]
  i2762.Descender = i2763[8]
  i2762.CenterLine = i2763[9]
  i2762.SuperscriptOffset = i2763[10]
  i2762.SubscriptOffset = i2763[11]
  i2762.SubSize = i2763[12]
  i2762.Underline = i2763[13]
  i2762.UnderlineThickness = i2763[14]
  i2762.strikethrough = i2763[15]
  i2762.strikethroughThickness = i2763[16]
  i2762.TabWidth = i2763[17]
  i2762.Padding = i2763[18]
  i2762.AtlasWidth = i2763[19]
  i2762.AtlasHeight = i2763[20]
  return i2762
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2767 = data
  i2766.id = i2767[0]
  i2766.x = i2767[1]
  i2766.y = i2767[2]
  i2766.width = i2767[3]
  i2766.height = i2767[4]
  i2766.xOffset = i2767[5]
  i2766.yOffset = i2767[6]
  i2766.xAdvance = i2767[7]
  i2766.scale = i2767[8]
  return i2766
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2768 = root || request.c( 'TMPro.KerningTable' )
  var i2769 = data
  var i2771 = i2769[0]
  var i2770 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.add(request.d('TMPro.KerningPair', i2771[i + 0]));
  }
  i2768.kerningPairs = i2770
  return i2768
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2774 = root || request.c( 'TMPro.KerningPair' )
  var i2775 = data
  i2774.xOffset = i2775[0]
  i2774.m_FirstGlyph = i2775[1]
  i2774.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2775[2], i2774.m_FirstGlyphAdjustments)
  i2774.m_SecondGlyph = i2775[3]
  i2774.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2775[4], i2774.m_SecondGlyphAdjustments)
  i2774.m_IgnoreSpacingAdjustments = !!i2775[5]
  return i2774
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2776 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2777 = data
  var i2779 = i2777[0]
  var i2778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2779[i + 0]));
  }
  i2776.m_GlyphPairAdjustmentRecords = i2778
  return i2776
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2782 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2783 = data
  i2782.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2783[0], i2782.m_FirstAdjustmentRecord)
  i2782.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2783[1], i2782.m_SecondAdjustmentRecord)
  i2782.m_FeatureLookupFlags = i2783[2]
  return i2782
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2784 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2785 = data
  i2784.m_GlyphIndex = i2785[0]
  i2784.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2785[1], i2784.m_GlyphValueRecord)
  return i2784
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2786 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2787 = data
  i2786.m_XPlacement = i2787[0]
  i2786.m_YPlacement = i2787[1]
  i2786.m_XAdvance = i2787[2]
  i2786.m_YAdvance = i2787[3]
  return i2786
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2788 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2789 = data
  i2788.sourceFontFileName = i2789[0]
  i2788.sourceFontFileGUID = i2789[1]
  i2788.pointSizeSamplingMode = i2789[2]
  i2788.pointSize = i2789[3]
  i2788.padding = i2789[4]
  i2788.packingMode = i2789[5]
  i2788.atlasWidth = i2789[6]
  i2788.atlasHeight = i2789[7]
  i2788.characterSetSelectionMode = i2789[8]
  i2788.characterSequence = i2789[9]
  i2788.referencedFontAssetGUID = i2789[10]
  i2788.referencedTextAssetGUID = i2789[11]
  i2788.fontStyle = i2789[12]
  i2788.fontStyleModifier = i2789[13]
  i2788.renderMode = i2789[14]
  i2788.includeFontFeatures = !!i2789[15]
  return i2788
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2792 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2793 = data
  request.r(i2793[0], i2793[1], 0, i2792, 'regularTypeface')
  request.r(i2793[2], i2793[3], 0, i2792, 'italicTypeface')
  return i2792
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2794 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2795 = data
  i2794.hashCode = i2795[0]
  request.r(i2795[1], i2795[2], 0, i2794, 'material')
  i2794.materialHashCode = i2795[3]
  request.r(i2795[4], i2795[5], 0, i2794, 'spriteSheet')
  var i2797 = i2795[6]
  var i2796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.add(request.d('TMPro.TMP_Sprite', i2797[i + 0]));
  }
  i2794.spriteInfoList = i2796
  var i2799 = i2795[7]
  var i2798 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2799.length; i += 2) {
  request.r(i2799[i + 0], i2799[i + 1], 1, i2798, '')
  }
  i2794.fallbackSpriteAssets = i2798
  i2794.m_Version = i2795[8]
  i2794.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2795[9], i2794.m_FaceInfo)
  var i2801 = i2795[10]
  var i2800 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.add(request.d('TMPro.TMP_SpriteCharacter', i2801[i + 0]));
  }
  i2794.m_SpriteCharacterTable = i2800
  var i2803 = i2795[11]
  var i2802 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2803.length; i += 1) {
    i2802.add(request.d('TMPro.TMP_SpriteGlyph', i2803[i + 0]));
  }
  i2794.m_SpriteGlyphTable = i2802
  return i2794
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2806 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2807 = data
  i2806.name = i2807[0]
  i2806.hashCode = i2807[1]
  i2806.unicode = i2807[2]
  i2806.pivot = new pc.Vec2( i2807[3], i2807[4] )
  request.r(i2807[5], i2807[6], 0, i2806, 'sprite')
  i2806.id = i2807[7]
  i2806.x = i2807[8]
  i2806.y = i2807[9]
  i2806.width = i2807[10]
  i2806.height = i2807[11]
  i2806.xOffset = i2807[12]
  i2806.yOffset = i2807[13]
  i2806.xAdvance = i2807[14]
  i2806.scale = i2807[15]
  return i2806
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2812 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2813 = data
  i2812.m_Name = i2813[0]
  i2812.m_HashCode = i2813[1]
  i2812.m_ElementType = i2813[2]
  i2812.m_Unicode = i2813[3]
  i2812.m_GlyphIndex = i2813[4]
  i2812.m_Scale = i2813[5]
  return i2812
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2816 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2817 = data
  request.r(i2817[0], i2817[1], 0, i2816, 'sprite')
  i2816.m_Index = i2817[2]
  i2816.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2817[3], i2816.m_Metrics)
  i2816.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2817[4], i2816.m_GlyphRect)
  i2816.m_Scale = i2817[5]
  i2816.m_AtlasIndex = i2817[6]
  i2816.m_ClassDefinitionType = i2817[7]
  return i2816
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2818 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2819 = data
  var i2821 = i2819[0]
  var i2820 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.add(request.d('TMPro.TMP_Style', i2821[i + 0]));
  }
  i2818.m_StyleList = i2820
  return i2818
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2824 = root || request.c( 'TMPro.TMP_Style' )
  var i2825 = data
  i2824.m_Name = i2825[0]
  i2824.m_HashCode = i2825[1]
  i2824.m_OpeningDefinition = i2825[2]
  i2824.m_ClosingDefinition = i2825[3]
  i2824.m_OpeningTagArray = i2825[4]
  i2824.m_ClosingTagArray = i2825[5]
  i2824.m_OpeningTagUnicodeArray = i2825[6]
  i2824.m_ClosingTagUnicodeArray = i2825[7]
  return i2824
}

Deserializers["AppLovinSettings"] = function (request, data, root) {
  var i2826 = root || request.c( 'AppLovinSettings' )
  var i2827 = data
  i2826.qualityServiceEnabled = !!i2827[0]
  i2826.sdkKey = i2827[1]
  i2826.setAttributionReportEndpoint = !!i2827[2]
  i2826.consentFlowEnabled = !!i2827[3]
  i2826.consentFlowPrivacyPolicyUrl = i2827[4]
  i2826.consentFlowTermsOfServiceUrl = i2827[5]
  i2826.userTrackingUsageDescriptionEn = i2827[6]
  i2826.userTrackingUsageLocalizationEnabled = !!i2827[7]
  i2826.userTrackingUsageDescriptionDe = i2827[8]
  i2826.userTrackingUsageDescriptionEs = i2827[9]
  i2826.userTrackingUsageDescriptionFr = i2827[10]
  i2826.userTrackingUsageDescriptionJa = i2827[11]
  i2826.userTrackingUsageDescriptionKo = i2827[12]
  i2826.userTrackingUsageDescriptionZhHans = i2827[13]
  i2826.userTrackingUsageDescriptionZhHant = i2827[14]
  i2826.adMobAndroidAppId = i2827[15]
  i2826.adMobIosAppId = i2827[16]
  i2826.snapAppStoreAppId = i2827[17]
  return i2826
}

Deserializers["TMPro.TMP_ColorGradient"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.TMP_ColorGradient' )
  var i2829 = data
  i2828.colorMode = i2829[0]
  i2828.topLeft = new pc.Color(i2829[1], i2829[2], i2829[3], i2829[4])
  i2828.topRight = new pc.Color(i2829[5], i2829[6], i2829[7], i2829[8])
  i2828.bottomLeft = new pc.Color(i2829[9], i2829[10], i2829[11], i2829[12])
  i2828.bottomRight = new pc.Color(i2829[13], i2829[14], i2829[15], i2829[16])
  return i2828
}

Deserializers["Facebook.Unity.Settings.FacebookSettings"] = function (request, data, root) {
  var i2830 = root || request.c( 'Facebook.Unity.Settings.FacebookSettings' )
  var i2831 = data
  i2830.selectedAppIndex = i2831[0]
  var i2833 = i2831[1]
  var i2832 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.add(i2833[i + 0]);
  }
  i2830.clientTokens = i2832
  var i2835 = i2831[2]
  var i2834 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.add(i2835[i + 0]);
  }
  i2830.appIds = i2834
  var i2837 = i2831[3]
  var i2836 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.add(i2837[i + 0]);
  }
  i2830.appLabels = i2836
  i2830.cookie = !!i2831[4]
  i2830.logging = !!i2831[5]
  i2830.status = !!i2831[6]
  i2830.xfbml = !!i2831[7]
  i2830.frictionlessRequests = !!i2831[8]
  i2830.androidKeystorePath = i2831[9]
  i2830.iosURLSuffix = i2831[10]
  var i2839 = i2831[11]
  var i2838 = new (System.Collections.Generic.List$1(Bridge.ns('Facebook.Unity.Settings.FacebookSettings+UrlSchemes')))
  for(var i = 0; i < i2839.length; i += 1) {
    i2838.add(request.d('Facebook.Unity.Settings.FacebookSettings+UrlSchemes', i2839[i + 0]));
  }
  i2830.appLinkSchemes = i2838
  i2830.uploadAccessToken = i2831[12]
  i2830.autoLogAppEventsEnabled = !!i2831[13]
  i2830.advertiserIDCollectionEnabled = !!i2831[14]
  return i2830
}

Deserializers["Facebook.Unity.Settings.FacebookSettings+UrlSchemes"] = function (request, data, root) {
  var i2844 = root || request.c( 'Facebook.Unity.Settings.FacebookSettings+UrlSchemes' )
  var i2845 = data
  var i2847 = i2845[0]
  var i2846 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.add(i2847[i + 0]);
  }
  i2844.list = i2846
  return i2844
}

Deserializers["GameAnalyticsSDK.Setup.Settings"] = function (request, data, root) {
  var i2848 = root || request.c( 'GameAnalyticsSDK.Setup.Settings' )
  var i2849 = data
  i2848.TotalMessagesSubmitted = i2849[0]
  i2848.TotalMessagesFailed = i2849[1]
  i2848.DesignMessagesSubmitted = i2849[2]
  i2848.DesignMessagesFailed = i2849[3]
  i2848.QualityMessagesSubmitted = i2849[4]
  i2848.QualityMessagesFailed = i2849[5]
  i2848.ErrorMessagesSubmitted = i2849[6]
  i2848.ErrorMessagesFailed = i2849[7]
  i2848.BusinessMessagesSubmitted = i2849[8]
  i2848.BusinessMessagesFailed = i2849[9]
  i2848.UserMessagesSubmitted = i2849[10]
  i2848.UserMessagesFailed = i2849[11]
  i2848.CustomArea = i2849[12]
  var i2851 = i2849[13]
  var i2850 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.add(i2851[i + 0]);
  }
  i2848.Build = i2850
  var i2853 = i2849[14]
  var i2852 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.add(i2853[i + 0]);
  }
  i2848.SelectedPlatformOrganization = i2852
  var i2855 = i2849[15]
  var i2854 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.add(i2855[i + 0]);
  }
  i2848.SelectedPlatformStudio = i2854
  var i2857 = i2849[16]
  var i2856 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.add(i2857[i + 0]);
  }
  i2848.SelectedPlatformGame = i2856
  var i2859 = i2849[17]
  var i2858 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.add(i2859[i + 0]);
  }
  i2848.SelectedPlatformGameID = i2858
  var i2861 = i2849[18]
  var i2860 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2861.length; i += 1) {
    i2860.add(i2861[i + 0]);
  }
  i2848.SelectedOrganization = i2860
  var i2863 = i2849[19]
  var i2862 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2863.length; i += 1) {
    i2862.add(i2863[i + 0]);
  }
  i2848.SelectedStudio = i2862
  var i2865 = i2849[20]
  var i2864 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i2865.length; i += 1) {
    i2864.add(i2865[i + 0]);
  }
  i2848.SelectedGame = i2864
  i2848.NewVersion = i2849[21]
  i2848.Changes = i2849[22]
  i2848.SignUpOpen = !!i2849[23]
  i2848.StudioName = i2849[24]
  i2848.GameName = i2849[25]
  i2848.OrganizationName = i2849[26]
  i2848.OrganizationIdentifier = i2849[27]
  i2848.EmailGA = i2849[28]
  i2848.IntroScreen = !!i2849[29]
  i2848.InfoLogEditor = !!i2849[30]
  i2848.InfoLogBuild = !!i2849[31]
  i2848.VerboseLogBuild = !!i2849[32]
  i2848.UseManualSessionHandling = !!i2849[33]
  i2848.SendExampleGameDataToMyGame = !!i2849[34]
  i2848.InternetConnectivity = !!i2849[35]
  var i2867 = i2849[36]
  var i2866 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.add(i2867[i + 0]);
  }
  i2848.CustomDimensions01 = i2866
  var i2869 = i2849[37]
  var i2868 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.add(i2869[i + 0]);
  }
  i2848.CustomDimensions02 = i2868
  var i2871 = i2849[38]
  var i2870 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2871.length; i += 1) {
    i2870.add(i2871[i + 0]);
  }
  i2848.CustomDimensions03 = i2870
  var i2873 = i2849[39]
  var i2872 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.add(i2873[i + 0]);
  }
  i2848.ResourceItemTypes = i2872
  var i2875 = i2849[40]
  var i2874 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.add(i2875[i + 0]);
  }
  i2848.ResourceCurrencies = i2874
  i2848.LastCreatedGamePlatform = i2849[41]
  var i2877 = i2849[42]
  var i2876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.RuntimePlatform')))
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.add(i2877[i + 0]);
  }
  i2848.Platforms = i2876
  i2848.CurrentInspectorState = i2849[43]
  var i2879 = i2849[44]
  var i2878 = new (System.Collections.Generic.List$1(Bridge.ns('GameAnalyticsSDK.Setup.Settings+HelpTypes')))
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.add(i2879[i + 0]);
  }
  i2848.ClosedHints = i2878
  i2848.DisplayHints = !!i2849[45]
  i2848.DisplayHintsScrollState = new pc.Vec2( i2849[46], i2849[47] )
  request.r(i2849[48], i2849[49], 0, i2848, 'Logo')
  request.r(i2849[50], i2849[51], 0, i2848, 'UpdateIcon')
  request.r(i2849[52], i2849[53], 0, i2848, 'InfoIcon')
  request.r(i2849[54], i2849[55], 0, i2848, 'DeleteIcon')
  request.r(i2849[56], i2849[57], 0, i2848, 'GameIcon')
  request.r(i2849[58], i2849[59], 0, i2848, 'HomeIcon')
  request.r(i2849[60], i2849[61], 0, i2848, 'InstrumentIcon')
  request.r(i2849[62], i2849[63], 0, i2848, 'QuestionIcon')
  request.r(i2849[64], i2849[65], 0, i2848, 'UserIcon')
  request.r(i2849[66], i2849[67], 0, i2848, 'AmazonIcon')
  request.r(i2849[68], i2849[69], 0, i2848, 'GooglePlayIcon')
  request.r(i2849[70], i2849[71], 0, i2848, 'iosIcon')
  request.r(i2849[72], i2849[73], 0, i2848, 'macIcon')
  request.r(i2849[74], i2849[75], 0, i2848, 'windowsPhoneIcon')
  i2848.UsePlayerSettingsBuildNumber = !!i2849[76]
  i2848.SubmitErrors = !!i2849[77]
  i2848.NativeErrorReporting = !!i2849[78]
  i2848.MaxErrorCount = i2849[79]
  i2848.SubmitFpsAverage = !!i2849[80]
  i2848.SubmitFpsCritical = !!i2849[81]
  i2848.IncludeGooglePlay = !!i2849[82]
  i2848.FpsCriticalThreshold = i2849[83]
  i2848.FpsCirticalSubmitInterval = i2849[84]
  var i2881 = i2849[85]
  var i2880 = new (System.Collections.Generic.List$1(Bridge.ns('System.Boolean')))
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.add(!!i2881[i + 0]);
  }
  i2848.PlatformFoldOut = i2880
  i2848.CustomDimensions01FoldOut = !!i2849[86]
  i2848.CustomDimensions02FoldOut = !!i2849[87]
  i2848.CustomDimensions03FoldOut = !!i2849[88]
  i2848.ResourceItemTypesFoldOut = !!i2849[89]
  i2848.ResourceCurrenciesFoldOut = !!i2849[90]
  var i2883 = i2849[91]
  var i2882 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2883.length; i += 1) {
    i2882.add(i2883[i + 0]);
  }
  i2848.gameKey = i2882
  var i2885 = i2849[92]
  var i2884 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.add(i2885[i + 0]);
  }
  i2848.secretKey = i2884
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2895 = data
  var i2897 = i2895[0]
  var i2896 = []
  for(var i = 0; i < i2897.length; i += 1) {
    i2896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2897[i + 0]) );
  }
  i2894.files = i2896
  i2894.componentToPrefabIds = i2895[1]
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2901 = data
  i2900.path = i2901[0]
  request.r(i2901[1], i2901[2], 0, i2900, 'unityObject')
  return i2900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2903 = data
  var i2905 = i2903[0]
  var i2904 = []
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2905[i + 0]) );
  }
  i2902.scriptsExecutionOrder = i2904
  var i2907 = i2903[1]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2907[i + 0]) );
  }
  i2902.sortingLayers = i2906
  var i2909 = i2903[2]
  var i2908 = []
  for(var i = 0; i < i2909.length; i += 1) {
    i2908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2909[i + 0]) );
  }
  i2902.cullingLayers = i2908
  i2902.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2903[3], i2902.timeSettings)
  i2902.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2903[4], i2902.physicsSettings)
  i2902.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2903[5], i2902.physics2DSettings)
  i2902.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2903[6], i2902.qualitySettings)
  i2902.enableRealtimeShadows = !!i2903[7]
  i2902.enableAutoInstancing = !!i2903[8]
  i2902.enableDynamicBatching = !!i2903[9]
  i2902.lightmapEncodingQuality = i2903[10]
  i2902.desiredColorSpace = i2903[11]
  var i2911 = i2903[12]
  var i2910 = []
  for(var i = 0; i < i2911.length; i += 1) {
    i2910.push( i2911[i + 0] );
  }
  i2902.allTags = i2910
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2915 = data
  i2914.name = i2915[0]
  i2914.value = i2915[1]
  return i2914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2919 = data
  i2918.id = i2919[0]
  i2918.name = i2919[1]
  i2918.value = i2919[2]
  return i2918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2923 = data
  i2922.id = i2923[0]
  i2922.name = i2923[1]
  return i2922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2925 = data
  i2924.fixedDeltaTime = i2925[0]
  i2924.maximumDeltaTime = i2925[1]
  i2924.timeScale = i2925[2]
  i2924.maximumParticleTimestep = i2925[3]
  return i2924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2927 = data
  i2926.gravity = new pc.Vec3( i2927[0], i2927[1], i2927[2] )
  i2926.defaultSolverIterations = i2927[3]
  i2926.bounceThreshold = i2927[4]
  i2926.autoSyncTransforms = !!i2927[5]
  i2926.autoSimulation = !!i2927[6]
  var i2929 = i2927[7]
  var i2928 = []
  for(var i = 0; i < i2929.length; i += 1) {
    i2928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2929[i + 0]) );
  }
  i2926.collisionMatrix = i2928
  return i2926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2933 = data
  i2932.enabled = !!i2933[0]
  i2932.layerId = i2933[1]
  i2932.otherLayerId = i2933[2]
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2935 = data
  request.r(i2935[0], i2935[1], 0, i2934, 'material')
  i2934.gravity = new pc.Vec2( i2935[2], i2935[3] )
  i2934.positionIterations = i2935[4]
  i2934.velocityIterations = i2935[5]
  i2934.velocityThreshold = i2935[6]
  i2934.maxLinearCorrection = i2935[7]
  i2934.maxAngularCorrection = i2935[8]
  i2934.maxTranslationSpeed = i2935[9]
  i2934.maxRotationSpeed = i2935[10]
  i2934.baumgarteScale = i2935[11]
  i2934.baumgarteTOIScale = i2935[12]
  i2934.timeToSleep = i2935[13]
  i2934.linearSleepTolerance = i2935[14]
  i2934.angularSleepTolerance = i2935[15]
  i2934.defaultContactOffset = i2935[16]
  i2934.autoSimulation = !!i2935[17]
  i2934.queriesHitTriggers = !!i2935[18]
  i2934.queriesStartInColliders = !!i2935[19]
  i2934.callbacksOnDisable = !!i2935[20]
  i2934.reuseCollisionCallbacks = !!i2935[21]
  i2934.autoSyncTransforms = !!i2935[22]
  var i2937 = i2935[23]
  var i2936 = []
  for(var i = 0; i < i2937.length; i += 1) {
    i2936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2937[i + 0]) );
  }
  i2934.collisionMatrix = i2936
  return i2934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2941 = data
  i2940.enabled = !!i2941[0]
  i2940.layerId = i2941[1]
  i2940.otherLayerId = i2941[2]
  return i2940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2943 = data
  var i2945 = i2943[0]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2945[i + 0]) );
  }
  i2942.qualityLevels = i2944
  var i2947 = i2943[1]
  var i2946 = []
  for(var i = 0; i < i2947.length; i += 1) {
    i2946.push( i2947[i + 0] );
  }
  i2942.names = i2946
  i2942.shadows = i2943[2]
  i2942.anisotropicFiltering = i2943[3]
  i2942.antiAliasing = i2943[4]
  i2942.lodBias = i2943[5]
  i2942.shadowCascades = i2943[6]
  i2942.shadowDistance = i2943[7]
  i2942.shadowmaskMode = i2943[8]
  i2942.shadowProjection = i2943[9]
  i2942.shadowResolution = i2943[10]
  i2942.softParticles = !!i2943[11]
  i2942.softVegetation = !!i2943[12]
  i2942.activeColorSpace = i2943[13]
  i2942.desiredColorSpace = i2943[14]
  i2942.masterTextureLimit = i2943[15]
  i2942.maxQueuedFrames = i2943[16]
  i2942.particleRaycastBudget = i2943[17]
  i2942.pixelLightCount = i2943[18]
  i2942.realtimeReflectionProbes = !!i2943[19]
  i2942.shadowCascade2Split = i2943[20]
  i2942.shadowCascade4Split = new pc.Vec3( i2943[21], i2943[22], i2943[23] )
  i2942.streamingMipmapsActive = !!i2943[24]
  i2942.vSyncCount = i2943[25]
  i2942.asyncUploadBufferSize = i2943[26]
  i2942.asyncUploadTimeSlice = i2943[27]
  i2942.billboardsFaceCameraPosition = !!i2943[28]
  i2942.shadowNearPlaneOffset = i2943[29]
  i2942.streamingMipmapsMemoryBudget = i2943[30]
  i2942.maximumLODLevel = i2943[31]
  i2942.streamingMipmapsAddAllCameras = !!i2943[32]
  i2942.streamingMipmapsMaxLevelReduction = i2943[33]
  i2942.streamingMipmapsRenderersPerFrame = i2943[34]
  i2942.resolutionScalingFixedDPIFactor = i2943[35]
  i2942.streamingMipmapsMaxFileIORequests = i2943[36]
  i2942.currentQualityLevel = i2943[37]
  return i2942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2953 = data
  i2952.weight = i2953[0]
  i2952.vertices = i2953[1]
  i2952.normals = i2953[2]
  i2952.tangents = i2953[3]
  return i2952
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2954 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2955 = data
  i2954.xPlacement = i2955[0]
  i2954.yPlacement = i2955[1]
  i2954.xAdvance = i2955[2]
  i2954.yAdvance = i2955[3]
  return i2954
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"humanBones":6,"enabled":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[11],"74":[36],"75":[2],"76":[2],"77":[2],"78":[2],"79":[2],"80":[2],"81":[2],"82":[83],"84":[83],"85":[83],"86":[83],"87":[83],"88":[83],"89":[83],"90":[83],"91":[83],"92":[83],"93":[83],"94":[83],"95":[83],"96":[36],"97":[17],"98":[99],"100":[99],"27":[26],"101":[102],"103":[26],"104":[17,26],"105":[26,31],"106":[26],"107":[31,26],"108":[17],"109":[31,26],"110":[26],"111":[112],"113":[26],"114":[26],"30":[27],"32":[31,26],"115":[26],"29":[27],"116":[26],"117":[26],"118":[26],"119":[26],"120":[26],"121":[26],"122":[26],"123":[26],"124":[26],"125":[31,26],"126":[26],"127":[26],"128":[26],"129":[26],"10":[31,26],"130":[26],"131":[41],"132":[41],"42":[41],"133":[41],"134":[36],"135":[36],"136":[112],"137":[4],"138":[36],"139":[140],"141":[112]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.BoxCollider","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","CharacterMove","UnityEngine.ParticleSystem","GameManager","UnityEngine.UI.Text","UnityEngine.SkinnedMeshRenderer","CameraFollow","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.ParticleSystemRenderer","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Texture2D","Dollars","PlatformCreator","UnityEngine.GameObject","Obstacle","PoliceBarrier","CarBarrier","Duba","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.AudioSource","TurnPlatform","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.PhysicMaterial","Thief","ThiefObstacleDetect","UnityEngine.AudioClip","DesertNonMovedObstacles","Candy","CopObstacle","DalScript","MovedTrain","Portal","UnityEngine.MeshCollider","TahteravalliObstacle","TreeObstacle","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","AppLovinSettings","TMPro.TMP_ColorGradient","Facebook.Unity.Settings.FacebookSettings","GameAnalyticsSDK.Setup.Settings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","GameAnalyticsSDK.GameAnalytics","GameAnalyticsSDK.Events.GA_SpecialEvents","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","UnityEngine.Animations.Rigging.RigBuilder","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.17f1";

Deserializers.productName = "Justice Run";

Deserializers.lunaInitializationTime = "10/31/2023 09:03:43";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "5.3.0";

Deserializers.lunaSHA = "1f13c8ab746b672a71592a697e719b6f623ec973";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "18518";

Deserializers.projectId = "82d229467a5b5344fabc5e68d7086b98";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "GameCircle";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.GameCircle.JusticeRun";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "ef5579bd-5bb1-405f-9df0-f45053cc78f3";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

