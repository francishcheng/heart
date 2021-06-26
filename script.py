file_name = './youtube/Fractional Flow Reserve Coronary CTA/[English (auto-generated)] Fractional Flow Reserve Coronary CTA.txt'
dist_name = './youtube/Fractional Flow Reserve Coronary CTA/nobreaks.txt'
with open(file_name, 'r') as f, open(dist_name, 'w') as wf:
	
	for line in f.readlines():
		if line != '\n':
			print(line[:-1] + ' ',end='')
			wf.write(line[:-1] + ' ')