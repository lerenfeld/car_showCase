/** @type {import('next').NextConfig} */
const nextConfig = {
  //add image domain
images = {
  domains: ["cdn.imagin.studio"],
},
typescript: {
  ignoreBuildErrors: true
}
};



module.exports = nextConfig;
