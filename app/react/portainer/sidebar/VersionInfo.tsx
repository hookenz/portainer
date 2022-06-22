import { useState } from 'react';
import { DialogOverlay } from '@reach/dialog';
import { Database, Hash, Server, Tag, Tool } from 'react-feather';

import { react2angular } from '@/react-tools/react2angular';

import { Button } from '@@/buttons';

import '@reach/dialog/styles.css';
import styles from './VersionInfo.module.css';

interface Props {
  edition: string;
  uiVersion: string;
}
export function VersionInfo({ edition, uiVersion }: Props) {
  const [showBuildInfo, setShowBuildInfo] = useState(false);

  const status = {
    serverVersion: '2.13.0',
    dbVersion: '35',
    ciBuildNumber: '17478',
    imageTag: 'portainer/portainer-ee:latest',
    nodeVersion: '14.2.4',
    yarnVersion: '0.12.5',
    webpackVersion: '1.15.4',
    goVersion: '1.18.0',
  };

  function onClose() {
    setShowBuildInfo(!showBuildInfo);
  }

  return (
    <>
      {showBuildInfo && (
        <DialogOverlay className={styles.dialog}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" onClick={onClose}>
                  ×
                </button>
                <h5 className="modal-title">Portainer {edition}</h5>
              </div>
              <div className="modal-body">
                <div className={styles.versionInfo}>
                  <table>
                    <tr>
                      <td>
                        <span className="inline-flex items-center">
                          <Server size="13" className="space-right" />
                          Server Version: {status.serverVersion}
                        </span>
                      </td>
                      <td>
                        <span className="inline-flex items-center">
                          <Database size="13" className="space-right" />
                          Database Version: {status.dbVersion}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="inline-flex items-center">
                          <Hash size="13" className="space-right" />
                          CI Build Number: #{status.ciBuildNumber}
                        </span>
                      </td>
                      <td>
                        <span>
                          <Tag size="13" className="space-right" />
                          Image Tag: {status.imageTag}
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className={styles.toolsList}>
                  <span className="inline-flex items-center">
                    <Tool size="13" className="space-right" />
                    Compilation tools:
                  </span>

                  <div className={styles.tools}>
                    <span className="text-muted small">
                      Nodejs v{status.nodeVersion}
                    </span>
                    <span className="text-muted small">
                      Yarn v{status.yarnVersion}
                    </span>
                    <span className="text-muted small">
                      Webpack v{status.webpackVersion}
                    </span>
                    <span className="text-muted small">
                      Go v{status.goVersion}
                    </span>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Button onClick={onClose}>Ok</Button>
              </div>
            </div>
          </div>
        </DialogOverlay>
      )}
      <span
        className="version"
        data-cy="portainerSidebar-versionNumber"
        onClick={() => {
          setShowBuildInfo(!showBuildInfo);
        }}
        onKeyPress={() => {
          setShowBuildInfo(!showBuildInfo);
        }}
        role="button"
        tabIndex={0}
      >
        {uiVersion}
      </span>
    </>
  );
}

export const VersionInfoAngular = react2angular(VersionInfo, [
  'edition',
  'uiVersion',
]);
