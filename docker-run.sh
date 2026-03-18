#!/bin/bash

echo "🌀 தமிழ் தேர்வு தயார்ப்பு வலைத்தளம் டாக்கரில் இயக்கப்படுகிறது..."

# கன்டெய்னர் செயல்பட்டுக் கொண்டிருந்தால் நிறுத்து
if docker ps -q --filter "name=tamil-exam-web" | grep -q .; then
    echo "🔄 ஏற்பட்டிருக்கும் கன்டெய்னரை நிறுத்துகிறது..."
    docker stop tamil-exam-web
fi

# ஏற்பட்டிருக்கும் கன்டெய்னரை அழித்துவிட்டு புதுதாக உருவாக்கு
docker rm tamil-exam-web 2>/dev/null || true

echo "🛠️ டாக்கர் உருவாக்கி இயக்குகிறது..."
docker build -t tamil-exam-website .
docker run -d -p 8080:80 --name tamil-exam-web tamil-exam-website

if docker ps | grep -q tamil-exam-web; then
    echo "✅ வலைத்தளம் வெற்றிகரமாக தொடங்கியது!"
    echo ""
    echo "🌐 உங்கள் தரைக்கு செல்லுங்கள்: http://localhost:8080"
    echo "ℹ️ கன்டெய்னரை நிறுத்த: docker stop tamil-exam-web"
    echo "ℹ️ கன்டெய்னரை மிட்டையாக நீக்கு: docker rm tamil-exam-web"
else
    echo "❌ கன்டெய்னர் தொடங்குவில் சிக்கல் ஏற்பட்டது!"
    echo ""
    echo "🛠️ முயற்சி செய்ய:"
    echo "docker logs tamil-exam-web"
fi