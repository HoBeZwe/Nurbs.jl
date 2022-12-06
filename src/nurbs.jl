
"""
    curvePoints(nbasisFun::Int, degree::Int, knotVector, controlPoints, uVector, weights)

Compute a 1D NURBS curve: given the 'knotVector', the 'controlPoints', the 'degree', and the 'weights', the curve is evaluated at the points given in 'uVector'.

Example for the controlPoints:

P1 = SVector(0.0, 0.0, 0.0)
P2 = SVector(0.1, 0.25, 0.0)
P3 = SVector(0.25, 0.3, 0.0)

controlPoints = [P1, P2, P3]
"""
function curvePoints(degree::Int, knotVector, controlPoints, uVector, weights)

    # the number of basis functions is determined by the number of knot vectors and the degree
    nbasisFun = length(knotVector) - degree - 1

    # determine the basis functions evaluated at uVector
    spans = findSpan(nbasisFun, uVector, knotVector)
    N = basisFun(spans, uVector, degree, knotVector)

    # determine the curve values
    curve     = [SVector(0.0, 0.0, 0.0) for i in eachindex(uVector)] # initialize
    normalize = [0.0 for i in eachindex(uVector)]

    for (j, span) in enumerate(spans)
        for ind in 1:(degree + 1)

            index = span - degree + ind - 1

            aux = N[j, ind] * weights[index]

            curve[j]     += aux * controlPoints[index]
            normalize[j] += aux
        end

        curve[j] /= normalize[j]

        normalize[j] == 0.0 && error("division by zero!") # TODO: properly handle this
    end

    return curve
end


"""
    surfacePoints(Patch::NURBSsurface, uEvalpoints, vEvalpoints)

Convenience function to plot a NURBSsurface.
"""
surfacePoints(Patch::NURBSsurface, uEvalpoints, vEvalpoints) = surfacePoints(
    Patch.uBasis.degree,
    Patch.vBasis.degree,
    Patch.uBasis.knotVec,
    Patch.vBasis.knotVec,
    Patch.controlPoints,
    uEvalpoints,
    vEvalpoints,
    Patch.weights,
)


"""
    surfacePoints(uDegree::Int, vDegree::Int, uKnotVector, vKnotVector, controlPoints, uVector, vVector, weights)

Compute NURBS surface: given the knotvectors and the degrees in 'u' and 'v' direction, the surface is evaluated at the evaluation points (uVector, vVector).

Control points ordering P_(xi,yj):

P_11 ----- P_12 ----- P_13 ---> y / v direction
  |          |         |
  |          |         |
P_21 ----- P_22 ----- P_23
  |          |         |
  |          |         |
P_31 ----- P_32 ----- P_33
  |
  x / u direction

"""
function surfacePoints(uDegree::Int, vDegree::Int, uKnotVector, vKnotVector, controlPoints, uVector, vVector, weights)

    # u-direction: determine the basis functions evaluated at uVector 
    nbasisFun = length(uKnotVector) - uDegree - 1
    uSpan = findSpan(nbasisFun, uVector, uKnotVector)
    Nu = basisFun(uSpan, uVector, uDegree, uKnotVector)

    # v-direction: determine the basis functions evaluated at vVector
    nbasisFun = length(vKnotVector) - vDegree - 1
    vSpan = findSpan(nbasisFun, vVector, vKnotVector)
    Nv = basisFun(vSpan, vVector, vDegree, vKnotVector)

    # intialize
    surface   = [SVector(0.0, 0.0, 0.0) for i in eachindex(uVector), j in eachindex(vVector)]
    normalize = [0.0 for i in eachindex(uVector), j in eachindex(vVector)]

    # determine the surface values
    for uPointInd in eachindex(uVector)

        uind = uSpan[uPointInd] - uDegree - 1

        for vPointInd in eachindex(vVector)

            for i in 1:(vDegree + 1)

                temp = SVector(0.0, 0.0, 0.0)
                normTemp = 0.0

                vind = vSpan[vPointInd] - vDegree + i - 1
                for k in 1:(uDegree + 1)

                    aux = Nu[uPointInd, k] * weights[uind + k, vind]

                    temp     += aux * controlPoints[uind + k, vind]
                    normTemp += aux
                end

                surface[uPointInd, vPointInd]   += Nv[vPointInd, i] * temp
                normalize[uPointInd, vPointInd] += Nv[vPointInd, i] * normTemp
            end

            surface[uPointInd, vPointInd] /= normalize[uPointInd, vPointInd]
        end
    end

    return surface
end
