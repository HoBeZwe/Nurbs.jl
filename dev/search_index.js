var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = NURBS","category":"page"},{"location":"#NURBS","page":"Home","title":"NURBS","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for NURBS.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [NURBS]","category":"page"},{"location":"#NURBS.Bspline","page":"Home","title":"NURBS.Bspline","text":"Bspline{F} <: Basis\n\nB-spline basis.\n\n\n\n\n\n","category":"type"},{"location":"#NURBS.BsplineCurve","page":"Home","title":"NURBS.BsplineCurve","text":"BsplineCurve{F}\n\nB-spline curve defined by the basis and the control points.\n\n\n\n\n\n","category":"type"},{"location":"#NURBS.BsplineSurface","page":"Home","title":"NURBS.BsplineSurface","text":"BsplineSurface{F} <: Surface\n\nSurface defined by a B-spline basis and the control points.\n\n\n\n\n\n","category":"type"},{"location":"#NURBS.NURB","page":"Home","title":"NURBS.NURB","text":"NURB{F} <: Basis\n\nNURBS basis.\n\n\n\n\n\n","category":"type"},{"location":"#NURBS.NURBScurve","page":"Home","title":"NURBS.NURBScurve","text":"NURBScurve{F}\n\nB-spline curve defined by the basis and the control points.\n\n\n\n\n\n","category":"type"},{"location":"#NURBS.NURBSsurface","page":"Home","title":"NURBS.NURBSsurface","text":"NURBSsurface{F} <: Surface\n\nSurface defined by a B-spline basis, the control points, and the weights.\n\n\n\n\n\n","category":"type"},{"location":"#NURBS.bSpline-Tuple{Bspline, Any}","page":"Home","title":"NURBS.bSpline","text":"bSpline(basis::Bspline, evalpoints)\n\nEvaluate B-spline basis at all evalpoints.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.bSplineDerivatives-Tuple{Bspline, Int64, Any}","page":"Home","title":"NURBS.bSplineDerivatives","text":"bSplineDerivatives(basis::Bspline, k::Int, evalpoints)\n\nEvaluate k-the derivative of B-spline basis at all evalpoints (all basis functions different from 0 at the evalpoints are evaluated).\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.bSplineNaive-Tuple{Any, Int64, Int64, Any}","page":"Home","title":"NURBS.bSplineNaive","text":"bSplineNaive(knotVector, i::Int, degree::Int, evalpoints; normalize=true)\n\ni-th b-spline basis function of degree 'degree' evaluated at all 'evalpoints'.\n\nThe knotvector is assumed to be normalized to [1, 0].\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.bSplineNaive-Tuple{Any, Int64, Int64, Real}","page":"Home","title":"NURBS.bSplineNaive","text":"bSplineNaive(knotVector, i::Int, degree::Int, u::Real)\n\ni-th b-spline basis function of degree 'degree' evaluated at u.\n\nFormula (2.5) of 'The NURBS Book' p. 50.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.bSplineNaive-Tuple{Any, Int64, Real}","page":"Home","title":"NURBS.bSplineNaive","text":"bSplineNaive(knotVector, i::Int, u::Real)\n\ni-th b-spline basis function of degree 0 evaluated at u.\n\nFormula (2.5) of 'The NURBS Book' p. 50.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.bSplineNaive-Tuple{Bspline, Int64, Any}","page":"Home","title":"NURBS.bSplineNaive","text":"bSplineNaive(basis::Bspline, i::Int, evalpoints)\n\ni-th B-spline basis function evaluated at all 'evalpoints'.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.bSplineNaiveDerivative-Tuple{Any, Int64, Int64, Any, Int64}","page":"Home","title":"NURBS.bSplineNaiveDerivative","text":"bSplineNaiveDer(knotVector, i::Int, degree::Int, evalpoints, k::Int; normalize=true)\n\nCompute the k-th derivative of i-th b-spline basis function of degree 'degree' evaluated at all 'evalpoints'.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.bSplineNaiveDerivative-Tuple{Any, Int64, Int64, Real, Int64}","page":"Home","title":"NURBS.bSplineNaiveDerivative","text":"bSplineNaiveDerivative(knotVector, i::Int, degree::Int, u::Real, k::Int)\n\nk-th derivative of the i-th b-spline basis function of degree 'degree' evaluated at (single) point 'u'.\n\nFormula (2.9) of 'The NURBS Book' p. 61. (Recursive implementation to avoid the faculties in the (2.10) formula.)\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.bSplineNaiveDerivative-Tuple{Bspline, Int64, Int64, Any}","page":"Home","title":"NURBS.bSplineNaiveDerivative","text":"bSplineNaiveDerivative(basis::Bspline, i::Int, k::Int, evalpoints)\n\nCompute the k-th derivative of i-th b-spline basis function evaluated at all 'evalpoints'.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.basisFun-Tuple{Any, Any, Int64, Any}","page":"Home","title":"NURBS.basisFun","text":"basisFun(knotSpan, uVector, degree::Int, knotVector)\n\nCompute the nonvanishing B-spline basis functions of degree 'degree' at the parametric points defined by 'uVector'\n\nReturn the B-spline basis functions vector of size length(uVector) * (degree + 1).\n\nAdapted from Algorithm A2.2 from 'The NURBS Book' p. 70.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.curvePoints-Tuple{BsplineCurve, Any}","page":"Home","title":"NURBS.curvePoints","text":"curvePoints(curve::BsplineCurve, uVector)\n\nConvenience function to plot a NURBS curve.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.curvePoints-Tuple{Int64, Any, Any, Any, Any}","page":"Home","title":"NURBS.curvePoints","text":"curvePoints(nbasisFun::Int, degree::Int, knotVector, controlPoints, uVector, weights)\n\nCompute a 1D NURBS curve: given the 'knotVector', the 'controlPoints', the 'degree', and the 'weights', the curve is evaluated at the points given in 'uVector'.\n\nExample for the controlPoints:\n\nP1 = SVector(0.0, 0.0, 0.0) P2 = SVector(0.1, 0.25, 0.0) P3 = SVector(0.25, 0.3, 0.0)\n\ncontrolPoints = [P1, P2, P3]\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.curvePoints-Tuple{Int64, Any, Any, Any}","page":"Home","title":"NURBS.curvePoints","text":"curvePoints(nbasisFun::Int, degree::Int, knotVector, controlPoints, uVector)\n\nCompute a 1D B-spline curve: given the 'knotVector', the 'controlPoints', and the 'degree', the curve is evaluated at the points given in 'uVector'.\n\nExample for the controlPoints:\n\nP1 = SVector(0.0, 0.0, 0.0) P2 = SVector(0.1, 0.25, 0.0) P3 = SVector(0.25, 0.3, 0.0)\n\ncontrolPoints = [P1, P2, P3]\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.curvePoints-Tuple{NURBScurve, Any}","page":"Home","title":"NURBS.curvePoints","text":"curvePoints(curve::NURBScurve, uVector)\n\nConvenience function to plot a NURBS curve.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.derBasisFun-Tuple{Any, Int64, Any, Any, Int64}","page":"Home","title":"NURBS.derBasisFun","text":"derBasisFun(knotSpan, degree::Int, evalpoints, knotVector, numberDerivatives::Int)\n\nCompute the nonvanishing B-spline basis functions and its derivatives of degree 'degree' at the parametric points defined by 'uVector'.\n\nOrganization of output:  dersv[n, k, :] contains (k-1)-th derivative at n-th point.\n\nAdapted from Algorithm A2.3 from 'The NURBS BOOK' p. 72.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.findSpan-Tuple{Int64, Any, Any}","page":"Home","title":"NURBS.findSpan","text":"findSpan(n::Int, u, knotVector)\n\nFind the spans of a B-spline knot vector at the parametric points 'u', where 'b' is the number of basis functions (control points).\n\nSpan: the intervall index in which a point lies. E.g., knotVector = [0, 1, 2, 3, 4]. Hence, there are 4 intervalls. u=1.2 lies in the second intervall.\n\nModification of Algorithm A2.1 from 'The NURBS Book' p. 68.\n\nAssumption that the knotVector is open! (the first and last knot are repeated degree + 1 times)\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.generateKnotVec-Tuple{Int64, Int64}","page":"Home","title":"NURBS.generateKnotVec","text":"generateKnotVec(b::Int, degree::Int)\n\nConvenience function to generate a knot vector for 'b' basis functions and a certain 'degree': \n\nThe first and last entry are repeated 'degree'+1 times. Normalized to [0, 1].\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.numBasisFunctions-Tuple{NURBS.Basis}","page":"Home","title":"NURBS.numBasisFunctions","text":"numBasisFunctions(basis::Basis)\n\nThe number of basis functions is fixed by the knot vector and the degree.\n\nAssumption: the first and last knot vector entry has mulitplicity degree + 1.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.nurbsNaive-Tuple{Any, Int64, Int64, Any, Any}","page":"Home","title":"NURBS.nurbsNaive","text":"nurbsNaive(knotVector, i::Int, degree::Int, evalpoints, weights)\n\ni-th NURB basis function of degree 'degree', the 'knotVector', and with 'weights' evaluated at all 'evalpoints'.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.nurbsNaive-Tuple{Any, Int64, Int64, Real, Any}","page":"Home","title":"NURBS.nurbsNaive","text":"nurbsNaive(knotVector, i::Int, degree::Int, u::Real, weights)\n\ni-th NURB basis function of degree 'degree', the 'knotVector', and with 'weights' evaluated at single point 'u'.\n\nFormula (4.2) of 'The NURBS Book' p. 118. \n\n\n\n\n\n","category":"method"},{"location":"#NURBS.nurbsNaive-Tuple{NURB, Int64, Any}","page":"Home","title":"NURBS.nurbsNaive","text":"nurbsNaive(basis::NURB, i::Int, evalpoints)\n\ni-th NURB basis function evaluated at all 'evalpoints'.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.parseCtrlPoints","page":"Home","title":"NURBS.parseCtrlPoints","text":"parseCtrlPoints(pointDims, stringVec, T=Float64)\n\nTake the 3 strings in 'stringVec' and parse it into a pointDims[1] x pointDims[2] matrix where each entry is a SVector for a controlpoint.\n\n\n\n\n\n","category":"function"},{"location":"#NURBS.parseLine","page":"Home","title":"NURBS.parseLine","text":"parseLine(line::String, T=Float64)\n\nTake the string 'line' of the form '0.1 0.2 0.6 ...' and parse it to a vector with eltype 'T'.\n\n\n\n\n\n","category":"function"},{"location":"#NURBS.parseSinglePatch-Tuple{Any, Int64, Any}","page":"Home","title":"NURBS.parseSinglePatch","text":"parseSinglePatch(stringVec, lineInd)\n\nTake the string vector and the line index where \"PATCH\" stands and extract the information of a single patch\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.readMultipatch","page":"Home","title":"NURBS.readMultipatch","text":"readMultipatch(filename::String)\n\nRead multipatch file organized as:\n\nPATCH a 4 4             -> degree in u and v 5 5             -> number of control points in u and v 0.0 0.0 ...     -> knot vector in u 0.0 0.0 ...     -> knot vector in v 0.1 0.2 ...     | 0.1 0.2 ...      > xyz components of the control points (normalized with the weigths -> we remove this weighting when reading in the data) 0.1 0.2 ...     | 1.0 1.0 ...     -> weights\n\nPATCH b  ...\n\n\n\n\n\n","category":"function"},{"location":"#NURBS.surfacePoints-Tuple{BsplineSurface, Any, Any}","page":"Home","title":"NURBS.surfacePoints","text":"surfacePoints(Patch::BsplineSurface, uEvalpoints, vEvalpoints)\n\nConvenience function to plot a B-spline surface.\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.surfacePoints-Tuple{Int64, Int64, Any, Any, Any, Any, Any, Any}","page":"Home","title":"NURBS.surfacePoints","text":"surfacePoints(uDegree::Int, vDegree::Int, uKnotVector, vKnotVector, controlPoints, uVector, vVector, weights)\n\nCompute NURBS surface: given the knotvectors and the degrees in 'u' and 'v' direction, the surface is evaluated at the evaluation points (uVector, vVector).\n\nControl points ordering P_(xi,yj):\n\nP11 ––- P12 ––- P13 –-> y / v direction   |          |         |   |          |         | P21 ––- P22 ––- P23   |          |         |   |          |         | P31 ––- P32 ––- P_33   |   x / u direction\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.surfacePoints-Tuple{Int64, Int64, Any, Any, Any, Any, Any}","page":"Home","title":"NURBS.surfacePoints","text":"surfacePoints(uDegree::Int, vDegree::Int, uKnotVector, vKnotVector, controlPoints, uVector, vVector)\n\nCompute B-spline surface: given the knotvectors and the degrees in 'u' and 'v' direction, the surface is evaluated at the evaluation points (uVector, vVector).\n\nControl points ordering P_(xi,yj):\n\nP11 ––- P12 ––- P13 –-> y / v direction   |          |         |   |          |         | P21 ––- P22 ––- P23   |          |         |   |          |         | P31 ––- P32 ––- P_33   |   x / u direction\n\n\n\n\n\n","category":"method"},{"location":"#NURBS.surfacePoints-Tuple{NURBSsurface, Any, Any}","page":"Home","title":"NURBS.surfacePoints","text":"surfacePoints(Patch::NURBSsurface, uEvalpoints, vEvalpoints)\n\nConvenience function to plot a NURBSsurface.\n\n\n\n\n\n","category":"method"}]
}
