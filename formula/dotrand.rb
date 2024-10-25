class Dotrand < Formula
  desc "A CLI tool to generate random fake with realistic-looking data."
  homepage "https://github.com/trinhthinh388/dotrand-cli"
  url "https://cli-assets.heroku.com/versions/9.3.2/0bce57c/heroku-v9.3.2-0bce57c-darwin-x64.tar.xz"
  sha256 "761e5db3183b8ec19ddcb8b8af44889e0b0977b052076962bd33bfcec3c29771"
  version "9.3.2"
  version_scheme 1

  on_macos do
    on_arm do
      url "https://cli-assets.heroku.com/versions/9.3.2/0bce57c/heroku-v9.3.2-0bce57c-darwin-arm64.tar.xz"
      sha256 "1b3719de89d8752c53caa8cdfc4a041609805fe4acbc2474afe0ab198b30ef92"
    end
  end

  on_linux do
    on_intel do
      url "https://cli-assets.heroku.com/versions/9.3.2/0bce57c/heroku-v9.3.2-0bce57c-linux-x64.tar.xz"
      sha256 "9442f4f9df5133c378669e80c0044d0b0a1f306715b5d334f6c40fbb167aa29c"
    end
    on_arm do
      url "https://cli-assets.heroku.com/versions/9.3.2/0bce57c/heroku-v9.3.2-0bce57c-linux-arm.tar.xz"
      sha256 "7e471c7d9ef26689bc33951f15e2d87b9a9d8cdebd81dc56edd181de55155413"
    end
  end

  def install
    inreplace "bin/dotrand", /^CLIENT_HOME=/, "export DOTRAND_OCLIF_CLIENT_HOME=#{lib/"client"}\nCLIENT_HOME="
    libexec.install Dir["*"]
    bin.install_symlink libexec/"bin/dotrand"
  end

  test do
    system bin/"dotrand", "--version"
  end
end