# தமிழ் தேர்வு தயார்ப்பு வலைத்தளத்திற்கான Docker கோப்பு
FROM nginx:alpine

# நிறுவல் செய்திகளை ஆங்கிலத்தில் மட்டுமே
ENV LANG=C.UTF-8

# வலைத்தள கோப்புகளை நகலெடுத்தல்
COPY . /usr/share/nginx/html/

# Nginx அமைப்புகளை மாற்றியமைத்தல்
COPY nginx.conf /etc/nginx/nginx.conf

# போர்ட் 80 ஐ வெளிப்படுத்தல்
EXPOSE 80

# Nginx ஐ தொடங்குதல்
CMD ["nginx", "-g", "daemon off;"]