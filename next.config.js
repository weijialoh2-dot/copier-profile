/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ 生成静态网站
  images: {
    unoptimized: true, // ✅ 让 <Image> 能在静态导出下使用
  },
};

export default nextConfig;
