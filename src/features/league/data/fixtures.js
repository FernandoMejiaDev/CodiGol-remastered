import { TEAM } from "@/features/matches/data/teams/teamIds";

// Match schedule for rounds 1 to 3

export const fixtures = {
  1: [
    { homeId: TEAM.WIND_JAGUARS, awayId:TEAM.GEM_RUBIES }, // Wind Jaguars vs Gem Rubies
    { homeId: TEAM.TUSK_ELEPHANTS, awayId: TEAM.JUGGERNAUT_LEOPARD },
    { homeId: TEAM.CODE_SHARKS, awayId: TEAM.SOAR_SWIFTS },
    { homeId: TEAM.KNIGHT_CODERS, awayId: TEAM.BYTE_GOPHERS },
    { homeId: TEAM.STYLE_CHAMELEONS, awayId: TEAM.PHANTOM_VIPER },
    { homeId: TEAM.FORGE_MINOTAURS, awayId: TEAM.WEB_HAWKS },
  ],

  2: [
    { homeId: TEAM.GEM_RUBIES, awayId: TEAM.WEB_HAWKS }, 
    { homeId: TEAM.WIND_JAGUARS, awayId: TEAM.WEB_HAWKS }, // Wind Jaguars vs Web Hawks
    { homeId: TEAM.TUSK_ELEPHANTS, awayId: TEAM.CODE_SHARKS },
    { homeId: TEAM.JUGGERNAUT_LEOPARD, awayId: TEAM.KNIGHT_CODERS },
    { homeId: TEAM.SOAR_SWIFTS, awayId: TEAM.STYLE_CHAMELEONS },
    { homeId: TEAM.BYTE_GOPHERS, awayId: TEAM.FORGE_MINOTAURS },
  ],

  3: [
    { homeId: TEAM.GEM_RUBIES, awayId: TEAM.WEB_HAWKS },
    { homeId: TEAM.WIND_JAGUARS, awayId: TEAM.CODE_SHARKS }, // Wind Jaguars vs Code Sharks
    { homeId: TEAM.TUSK_ELEPHANTS, awayId: TEAM.FORGE_MINOTAURS },
    { homeId: TEAM.JUGGERNAUT_LEOPARD, awayId: TEAM.PHANTOM_VIPER },
    { homeId: TEAM.SOAR_SWIFTS, awayId: TEAM.STYLE_CHAMELEONS },
    { homeId: TEAM.BYTE_GOPHERS, awayId: TEAM.KNIGHT_CODERS },
  ],
};
