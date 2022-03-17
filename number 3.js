function weight(r, h) {
    var CylinderVolume;
    var decimetercube;
    var mass;

    CylinderVolume = Math.PI * (r * r) * h
    decimetercube = CylinderVolume / 1000
    mass = decimetercube

    return mass
}