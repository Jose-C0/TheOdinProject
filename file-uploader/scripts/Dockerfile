# escape=`
FROM postgres:17.1

WORKDIR /scrips

RUN rm -f error.txt && touch error.txt

COPY . . 
# COPY inventorydb.sql .
# COPY dbIsEmpty.sh .

RUN chmod +x dbIsEmpty.sh
