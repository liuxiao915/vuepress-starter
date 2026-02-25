#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 注意：构建步骤放在 package.json 的 scripts 里执行，
# 这里仅负责把已构建好的 dist 推送到 gh-pages。

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
# git commit -m 'deploy'
git -c user.name="liuxiao915" -c user.email="1054105865@qq.com" commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/liuxiao915/vuepress-starter.git master:gh-pages
cd -