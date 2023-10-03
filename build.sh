npm run build
local distdir = "../dist-kamarafon"
echo "----------------------- $distdir"
rm -rf "$distdir/*"
mv dist/* "$distdir"

