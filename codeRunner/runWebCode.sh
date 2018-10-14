langCmnd=$1
langExt=$2


sudo docker run --name tempCon -i -t -d vm bash
sudo docker cp /home/abreeza/Desktop/sproj/repository/test.$langExt tempCon:/home/test.$langExt	
sudo docker exec tempCon /bin/bash -c "cd /home; touch output.txt; touch errors.log; $langCmnd"
sudo docker cp tempCon:/home/errors.log /home/abreeza/Desktop/sproj/repository/errors.log
sudo docker cp tempCon:/home/output.txt /home/abreeza/Desktop/sproj/repository/output.txt
sudo docker stop tempCon	
sudo docker rm tempCon	