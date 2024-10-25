import { Command, Flags, ux } from '@oclif/core';

export default class Info extends Command {
  static override description = 'About Dotrand CLI';

  public async run(): Promise<void> {
    this.log(
      ux.colorize(
        this.config.theme?.json?.brace,
        `
██████╗  ██████╗ ████████╗██████╗  █████╗ ███╗   ██╗██████╗        ██████╗██╗     ██╗
██╔══██╗██╔═══██╗╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔══██╗      ██╔════╝██║     ██║
██║  ██║██║   ██║   ██║   ██████╔╝███████║██╔██╗ ██║██║  ██║█████╗██║     ██║     ██║
██║  ██║██║   ██║   ██║   ██╔══██╗██╔══██║██║╚██╗██║██║  ██║╚════╝██║     ██║     ██║
██████╔╝╚██████╔╝   ██║   ██║  ██║██║  ██║██║ ╚████║██████╔╝      ╚██████╗███████╗██║
╚═════╝  ╚═════╝    ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝        ╚═════╝╚══════╝╚═╝
`
      )
    );

    this.log(
      ux.colorize(
        this.config.theme?.sectionHeader,
        'A CLI tool to generate random fake with realistic-looking data.'
      )
    );
  }
}
