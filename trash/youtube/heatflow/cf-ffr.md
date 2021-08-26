http://rs.yiigle.com/CN113805201904/1161686.htm
CCA 经导管冠状动脉造影(catheter-based invasive coronary angiography): 金标准， 但是凭借目测评估的冠状动脉狭窄程度并不能完全代表心肌缺血的严重程度

FFR 血流储备分数(fractional flow reserve) 评估冠状动脉狭窄严重程度的技术,由CCA检查得出（通过测量最大血流(充血)时狭窄病变远端的压力(导丝压力)和近端的压力(主动脉压力)，并计算压力比，得出结果为通过病变的血流比例，即为FFR数值, 正常值为1，目前认为\<0.8 提示病变可引起心肌缺血） 

CCTA 冠状动脉CT血管造影(coronary computed tomography angiography，CCTA)已成为一种重要的冠心病**无创**诊断方法 CCTA在冠心病诊断方面有很高的敏感性和阴性预测价值[7]，但其特异性和阳性预测价值相对较低，尤其是在中度狭窄或临界病变中

CT-FFR (Computed Tomography derived Fractional Flow Reserve)**解剖狭窄和功能狭窄综合评估**, 它利用CCTA提供的血管狭窄程度等数据信息模拟计算出各病变的FFR数值，从解剖和功能两个方面综合评估冠状动脉狭窄程度, **无创伤**

http://www.chinacirculation.org/CommonBlock/SiteContentDetail?contentID=135241

CT-FFR 两种方法
1. CFD(计算流体动力学, computational fluid dynamics)
	首先通过整理CCTA测得的各支血管的正常及病变部分的管腔横截面积等数据，建立一个三维的冠状动脉血管树模型[11]。之前的生物模型研究证实，物体的质量和它的解剖及生理是直接相关的[13]，另外Choy等[14]的研究证实冠状动脉血流和心肌质量是成比例的，而心肌质量可通过CCTA测得的数据计算得到[11]。因此，冠状动脉的血流和阻力可利用血管树模型中血管直径及对应心肌质量等数据计算出来。利用同样的计算方法，最大血流(充血)状态时的血流、阻力、压力等数据也可得到。在CCA中测量FFR时，最大血流状态是通过静脉或冠状动脉注射腺苷来获得的[3]，而在CT-FFR中只能通过模拟计算。之前的大量有创FFR研究证实，注射腺苷后冠状动脉微循环阻力会下降[15]。利用这些数据中的微循环阻力下降的规律可以模拟计算出冠状动脉血管树模型中最大血流状态时的流速、压力等[11]。这种血流计算方法虽然听起来挺简单，实际上是非常复杂的数学模型和方程，需要测量数百万个数据，所以对计算机性能要求很高，所需时间也较长，这也是限制其临床应用的最主要因素。HeartFlow是目前唯一获FDA认证的CFD模型软件
2. 人工智能深度学习 artificial intelligence & deep learning
	近年随着大数据和人工智能技术的兴起，深度学习的人工智能程序将计算速度和计算机精度进一步提高。首先，人工智能利用多层神经网络等技术对已有的冠状动脉解剖和对应的血流动力学数据库进行深度学习和训练，提取与血流动力学相关的必要的形态特征，掌握冠状动脉血管树的形态特征和对应血流动力学参数之间的联系和规律。学习和训练完成后，输入CCTA测得的解剖形态数据，人工智能就可以很快地推算出相应的血流动力学参数，得到FFR数值[16]。这种方法不需实时计算，所以用时较短，对计算机性能要求也比较低，临床可行性高。目前有多家公司正在研发这种计算方法的软件，包括德国西门子公司的cFFR软件(cFFR，version2.0-3.0)[17]和中国科亚医疗公司的深脉分数(DEEPVESSEL FFR)[18]等，北京安贞医院周玉杰团队的单中心研究结果显示，DEEPVESSEL FFR软件诊断心肌缺血的准确度为89.2%、敏感度为94%、特异度为84%，阳性预测值87%、阴性预测值92%，而每位患者的平均计算时间仅需(120±13)s，大大提高了工作效率[18]。与HeartFlow软件相比，这类新的人工智能深度学习软件对心肌缺血诊断的准确性相似，但明显缩短了计算时间，具有更高的临床可行性，但还需更多的临床试验去证实。

heartflow CFD(流体力学) 方法
[https://www.youtube.com/watch?v=MY84FiTDPZI]
procedures of computation of coronary blood flow from CT:
1. constructing a patient anatomic model of coronary arteries   ( anatomic: 解剖学上的 ).    
2. specifying patient specific physiological condition during maximal hyperemia (physiological 生理学上的, hyperemia 充血) 
3. computing the blood flow by performing a numerical solution of the laws of physics governing fluid dynamics

heartflows physiological model steps
1. total demand for blood can be quantified by the myocardial(心肌) Mass(质量)
2. demand for blood of individual myocardial perfusion territories(心肌灌注区) at rest can be derived from the size of the feeding vessel(供血血管). 
3. maximal hyperemia can be simulated based on how micro circulation is known to predictably respond to adenosine.
> 	A heart flow analysis is performed on a standard coronary CT angiogram(造影) acquired following SCCT (国际心血管CT协会)guidelines. no additional medication radiation or special procedures are required at the time of the CT scan. 
> 	The scan is simply uploaded through a standard DICOM transfer to heart flow secure cloud for analysis.
at heartflow, computation of coronary blood flow from CT involves three steps. first constructing a patient specific anatomic model of the coronary arteries second specifying patient specific Physiology conditions during maximal hyperemia and third, computing the blood flow by performing a numerical solution of the laws of physics governing fluid dynamics
> 	heartflow’s coronary segmentation algorithms model arterial lumen(管腔) boundaries down to approximately one millimeter in diameter, successive generations of algorithms are trained using data collected in multiple clinical trials and by edits made by trained heart flow analysts. 
> 
> 	the result is a validated process for interpreting CT data and modeling lumen boundaries. Assessmented(评估) by CTA is the most reliable non-invasive test for excluding coronary artery disease.
>
> 	however the degree of stenosis(狭窄) alone cannot determine the functional significance of a coronary narrowing even heartflows high-fidelity(高保真) anatomic reference models are insufficient（不够） without Physiology. heartflows physiological model is based on established scientific principles including one, total demand for blood can be quantified by the myocardial(心肌) Mass(质量). Two, demand for blood of individual myocardial perfusion territories(心肌灌注区) at rest can be derived from the size of the feeding vessel(供血血管). Three, maximal hyperemia can be simulated based on how micro circulation is known to predictably respond to adenosine. computation of coronary flow and pressure is based on the governing equations of fluid dynamics already in use by other industries for many years. millions of partial differential equations are solved simultaneously over many iterations, the result is a three dimensional pressure map of the coronary tree, fractional flow reserve mathematically derived from CT or FFR-CT is the ratio of the pressure in the coronary artery past the stenosis to the pressure in the aorta(主动脉), the heart flow analysis is delivered back to clinicians as a PDF document compatible with health record systems by combining anatomy physiology and computational fluid dynamics. heartflow aids clinicians in non-invasively determining the functional significance of coronary stenosis and in differentiating between those stenosis which do and do not obstruct blood flow




