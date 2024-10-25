class Dotrand < Formula
  desc "A CLI tool to generate random fake with realistic-looking data."
  homepage "https://github.com/trinhthinh388/dotrand-cli"
  url "https://registry.npmjs.org/dotrand-cli/-/dotrand-cli-0.0.2.tgz"
  sha256 "2cda041437a4c7a9a25a64ebfa10216c546b467f09c6442f4e52c2ece660cda4"

  depends_on "node"

  def install
    system "npm", "install", *std_npm_args
    bin.install_symlink Dir["#{libexec}/bin/*"]
  end

  test do
    # add a meaningful test here, version isn't usually meaningful
    assert_match version.to_s, shell_output("#{bin}/dotrand --version")
  end

end