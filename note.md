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

=======
## CFR
	CFR 冠脉血流储备(coronary flow reverve) , 冠脉血流承担心肌供氧的任务， 当氧需增加或在神经体液因素的调节和药物作用下 ， 冠状动脉会发生扩张， 冠脉血流从静息状态增加到充血状态， 这种冠脉血流增加的能力被称为冠脉血流储备(coronary flow reserve, CFR), 是冠脉最大血流量和静息时血流量的比值， **正常值4- 5, 小千1.8为异常， 大于2.2为正常**。

	CFR反映**心外膜血管和微循环的整体情况** ， 心外膜血管和微血管病变都会影响CFR的数值，


### 测定方法
	测定CFR的方法分为有创性和无创性两类， 前者包括冠脉内多普勒导管和导丝技术、 右心导管测定冠状窦血流等， 后者包括正电子断层显像(PET)、 磁共振( MRI)、 超声心动图等

## FFR
### FFR
	FFR 血流储备分数(fractional flow reserve) 评估冠状动脉狭窄严重程度的技术,由CCA检查得出（通过测量最大血流(充血)时狭窄病变远端的压力(导丝压力)和近端的压力(主动脉压力)，并计算压力比，得出结果为通过病变的血流比例，即为FFR数值, 正常值为1，目前认为\<0.8 提示病变可引起心肌缺血） 
### CT-FFR

	CT-FFR (Computed Tomography derived Fractional Flow Reserve)**解剖狭窄和功能狭窄综合评估**, 它利用CCTA提供的血管狭窄程度等数据信息模拟计算出各病变的FFR数值，从解剖和功能两个方面综合评估冠状动脉狭窄程度, **无创伤**
## IMR
	微循环阻力系数(index of microcirculatory resistance, IMR)是特异性反映冠脉微循环阻力的指标 ， 通过温度稀释法测量出冠脉血流和微循环两端的压力阶差， 压力阶差除以血流速度就是微循环的阻力， 数值小于25正常， 大于30异常。

	IMR特异性反映冠脉微循环的情况

### 测定方法
	超声多普勒和温度稀释法。超声多普勒 通过测量超声波从红细胞发射回来的时间， 测算血流速度， 最大充血状态下的冠脉内压力（即压力导丝测量的压力 Pd)除以血流速度是 IMR , 最大充血状态下的血流速度除以静息状态下血流速度为CFR.

	温度稀释 法通过压力导丝( Preussu reWire , St.Jude Medical)头端和导丝杆上的温度传感 器测量， 方法是将导丝头端的温度传感器放到离导引导管口至少5cm远的地方，保持不动， 用注射器从导引导管内弹丸式注射3ml室温生理盐水， 导丝杆上的温度感受器探测到温度变化， 会记录一个温度曲线， 盐水到达距离导丝头端3cm 的温度感受器时， 会有第二条温度曲线， 通过计算两条温度曲线触发的时间差 ，就知道盐水从导引导管到导丝头端感受器运行的时间， 这个时间叫平均传导时间 (transit me an time , Trnn) , 这个时间 是和血流速度成反比的 。 重复测量3次， 取 平均值 。 然后静脉给腺甘或ATP 达到最大充血状态后， 再次重复3次， 得到最大充血状态下的平均值， 同时得到了Pd值 。CFR=静息时时间(Tmn rest) /最 大充血状态下时间(Tmnhyp), IMR = Pd x Tmn。


## CFR IMR FFR的关系
	CFR反映**心外膜血管和微循环的整体情况**,  IMR特异性反映冠脉微循环的情况。 FFR is a validated, reproducible measurement of relative CFR





## MBF
心肌血流