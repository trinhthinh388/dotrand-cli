import { Command, ux } from '@oclif/core';
import {
  PHONE_METADATA,
  SUPPORTED_PHONE_COUNTRIES,
} from '../constants/phone.js';
import ReRegExp from 'reregexp';
import Table from 'cli-table3';
import { parsePhoneNumber } from 'libphonenumber-js';

export default class Phone extends Command {
  static override description = 'Generate a random phone';

  static override examples = [
    '<%= config.bin %> <%= command.id %> <country code>',
    '<%= config.bin %> <%= command.id %> AU',
    '<%= config.bin %> <%= command.id %> vn',
  ];

  static strict = false;

  private checkSupportedCountries(country: string) {
    return SUPPORTED_PHONE_COUNTRIES.includes(country);
  }

  private generateRandomPhone(country: string) {
    const { phoneCode, pattern } = PHONE_METADATA.find(
      (metadata) => metadata.countryCode === country
    )!;
    const r = new ReRegExp(pattern);
    const e164 = `+${phoneCode}${r.build()}`;
    const parsed = parsePhoneNumber(e164);
    return {
      countryCode: country,
      e164,
      international: parsed.formatInternational(),
      national: parsed.formatNational(),
    };
  }

  public async run(): Promise<void> {
    const { argv } = await this.parse(Phone);

    if (!argv || argv.length === 0) {
      this.error('🛑 Required at least one country code', {
        exit: 1,
      });
    }

    const countries = (argv as string[]).map((c) => c.toUpperCase());

    if (!this.checkSupportedCountries(countries[0])) {
      this.error(
        `🛑 Country with country code ${ux.colorize(
          this.config.theme?.json?.key,
          countries[0]
        )} is not supported.`,
        {
          exit: 1,
        }
      );
    }

    const table = new Table({
      head: ['Country Code', 'E.164', 'International', 'National'],
      style: { head: ['yellow'] },
    });
    const generated = this.generateRandomPhone(countries[0]);
    table.push({
      [generated.countryCode]: [
        generated.e164,
        generated.international,
        generated.national,
      ],
    });

    this.log(table.toString());
  }
}
