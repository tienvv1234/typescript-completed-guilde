import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary} from './Summary';
// import { HtmlReport } from './reportTargets/HtmlReport';

// Create an object that satisfies the 'dataReader' interface
// const csvFileReader = new CsvFileReader('./stats/football.csv');

// Create an instance of MatchReader and pass in something satisfying the 'dataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

// const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
// summary.buildAndPrintReport(matchReader.matches);

// const summaryHtml = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
// summaryHtml.buildAndPrintReport(matchReader.matches);

const matchReader = MatchReader.fromCsv('./stats/football.csv');
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);