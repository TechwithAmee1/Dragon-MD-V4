FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/TechwithAmee1/Dragon-MD-V4 /root/TechwithAmee1
WORKDIR /root/TechwithAmee1/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
