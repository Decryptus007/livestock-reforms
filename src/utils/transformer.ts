import { DiagnosisHistory } from "./res-types";

export const convertDiagnosisHistory = (
  diagnosisHistory: DiagnosisHistory[]
) => {
  return diagnosisHistory.map((entry) => ({
    month: `${entry.month} ${entry.year}`,
    blood_pressure: {
      systolic: {
        value: entry.blood_pressure.systolic.value,
        levels: entry.blood_pressure.systolic.levels,
      },
      diastolic: {
        value: entry.blood_pressure.diastolic.value,
        levels: entry.blood_pressure.diastolic.levels,
      },
    },
  }));
};
