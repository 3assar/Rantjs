
var dic_unit=[];
var dic_unit_energy = ["volt/volts/V", "millivolt/millivolts/mV", "kilovolt/kilovolts/kV", "farad/farads/F", "microfarad/microfarads/μF", "joule/joules/J", "kilojoule/kilojoules/kJ", "ampere/amperes/A", "milliampere/milliamperes/mA", "watt/watts/W", "kilowatt/kilowatts/kW", "milliwatt/milliwatts/mW", "megawatt/megawatts/MW"];
var dic_unit_small = ["centimeter/centimeters/cm", "milliliter/milliliters/mL", "millivolt/millivolts/mV", "microfarad/microfarads/μF", "milliampere/milliamperes/mA", "milliwatt/milliwatts/mW"];
var dic_unit_pressure = ["decibel/decibels/dB", "pascal/pascals/Pa", "kilopascal/kilopascals/kPa"];
var dic_unit_volume = ["gallon/gallons/gal", "bucket/buckets/bucket", "liter/liters/L", "teaspoon/teaspoons/tsp", "cup/cups/c", "quart/quarts/qt", "pint/pints/pt", "milliliter/milliliters/mL", "tablespoon/tablespoons/tbsp", "cubic centimeter/cubic centimeters/cc"];
var dic_unit_potential = ["volt/volts/V", "millivolt/millivolts/mV", "kilovolt/kilovolts/kV"];
var dic_unit_factor = ["centimeter/centimeters/cm", "kilometer/kilometers/km", "kilogram/kilograms/kg", "megaton/megatons/Mt", "milliliter/milliliters/mL", "kilopascal/kilopascals/kPa", "millivolt/millivolts/mV", "kilovolt/kilovolts/kV", "microfarad/microfarads/μF", "kilojoule/kilojoules/kJ", "milliampere/milliamperes/mA", "kilowatt/kilowatts/kW", "milliwatt/milliwatts/mW", "megawatt/megawatts/MW"];
var dic_unit_large = ["kilometer/kilometers/km", "kilogram/kilograms/kg", "megaton/megatons/Mt", "kilopascal/kilopascals/kPa", "kilovolt/kilovolts/kV", "kilojoule/kilojoules/kJ", "kilowatt/kilowatts/kW", "megawatt/megawatts/MW"];
var dic_unit_length = ["centimeter/centimeters/cm", "meter/meters/m", "kilometer/kilometers/km", "inch/inches/in", "foot/feet/ft", "yard/yards/y", "mile/miles/mi", "lightyear/lightyears/ly"];
var dic_unit_power = ["watt/watts/W", "kilowatt/kilowatts/kW", "milliwatt/milliwatts/mW", "megawatt/megawatts/MW"];
var dic_unit_current = ["ampere/amperes/A", "milliampere/milliamperes/mA"];
var dic_unit_weight = ["pound/pounds/lb", "gram/grams/g", "kilogram/kilograms/kg", "ton/tons/t", "megaton/megatons/Mt", "ounce/ounces/oz"];
var dic_unit_capacitance = ["farad/farads/F", "microfarad/microfarads/μF"];
dic_unit = dic_unit.concat(dic_unit_energy,dic_unit_small,dic_unit_pressure,dic_unit_volume,dic_unit_potential,dic_unit_factor,dic_unit_large,dic_unit_length,dic_unit_power,dic_unit_current,dic_unit_weight,dic_unit_capacitance);