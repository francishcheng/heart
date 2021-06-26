# [Computational fluid dynamics modelling in cardiovascular medicine](https://heart.bmj.com/content/heartjnl/102/1/18.full.pdf)
	- Models based upon coronary angiography (CT /invasive) to compute physiological coronary lesion significance less invasively(aka VFFR, V for virtual(computed)),  
	- Widened access to the benefits of physiological lesion assessment; vFFR lacks the practical limitations that restrict use of the invasive technique. Virtual stenting enables planning and selection of optimal treatment strategy
	- Accurate vessel reconstruction and patient-specific tuning of the model boundary conditions (especially those of myocardial resistance)
## CFD model can be described as:
1. clinical imaging
2. segmentation and reconstruction
3. discretation 
	accuracy and numerical stability are influenced by spatial and temporal 
	level of mesh refinement, are influenced by case- and context-specific factors.
4. boundary condition 
5. simulation 
	define properties: density, viscocity, initial condition of the system(fluid speed), discretisation information(time step size, numerical approximation schemes数值接近方法)
	solve the navier-stocks and continuity equations 
	
6. post-processing 
	extract data that interested 
7. validation 

## advanced boundary conditions 
Rather than specifying pressure or flow at a boundary, an add- itional, lower-order model may be coupled to the 3D solver to generate more realistic conditions proximal and distal to the simulation domain 

## assumptions 
1. segmented region has rigid walls.
2. Newtonian-fluid

