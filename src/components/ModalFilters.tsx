import { ChangeEvent } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { ModalFilterData, FilterType } from '../@types';
import { CATEGORIES, ACCESIBILITIES, DATASOURCES } from '../constants/categories';
import { useFilter } from '../store/hooks/custom/useFilters';

export const ModalFilters = ({ setOpenModal }: ModalFilterData) => {
  const {
    categoriesSelected,
    accesibilities,
    dataSources,
    handleChangeCategory,
    handleChangeAccesibilities,
    handleChangeDataSources,
    closeModalAndCallFilters
  } = useFilter({ setOpenModal });
  return (
    <div className="modalretailer">
      <div className="panel">
        <div className="head">
          <label>Choose the categories that most accurately describes the retailer.</label>
          <ClearIcon
            className="clouseClearIcon"
            onClick={() => setOpenModal(false)}
          />
        </div>
        <div className="body">
          <div className="card">
            <div className="tcatecory">
              <label>Select Category</label>
            </div>
            <div className="group">
              {CATEGORIES.map((category: FilterType) => (
                <div className="option" key={category.name}>
                  <label className="chkwrap">
                    {category.name}
                    <input
                      type="checkbox"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeCategory(e, category)}
                      checked={categoriesSelected && categoriesSelected.indexOf(category.attrib) > -1}
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="tcatecory">
              <label>Select Accessibility</label>
            </div>
            <div className="group">
              {ACCESIBILITIES.map((accesibility: FilterType) => (
                <div className="option" key={accesibility.name}>
                  <label className="chkwrap">
                    {accesibility.name}
                    <input
                      type="checkbox"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAccesibilities(e, accesibility)}
                      checked={accesibilities && accesibilities.indexOf(accesibility.attrib) > -1}
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="tcatecory">
              <label>Select Data Sources</label>
            </div>
            <div className="group">
              {DATASOURCES.map((datasource: FilterType) => (
                <div className="option" key={datasource.name}>
                  <label className="chkwrap">
                    {datasource.name}
                    <input
                      type="checkbox"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeDataSources(e, datasource)}
                      checked={dataSources && dataSources.indexOf(datasource.attrib) > -1}
                    />
                    <span className="checkmark ckeckmark-form" />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="foot">
          <button type="button" className="light" onClick={closeModalAndCallFilters}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
