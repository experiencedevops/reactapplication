FROM experiencedevops/nginx:latest
COPY build /usr/share/nginx/html
COPY run.sh /run.sh

CMD ["bash", "/run.sh"]
